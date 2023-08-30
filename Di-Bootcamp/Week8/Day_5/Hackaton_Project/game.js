const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
let cameraStream = null;
let platformX = canvas.width / 2;
let objects = [];
const OBJECT_SIZE = 30;

async function startCamera() {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = cameraStream;
    await video.play();

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    video.addEventListener("loadedmetadata", () => {
      gameLoop(video);
    });
  } catch (error) {
    console.error("Error accessing camera:", error);
  }
}

function gameLoop(video) {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  drawPlatform();
  drawObjects();

  requestAnimationFrame(() => gameLoop(video));
}

function drawPlatform() {
  context.fillStyle = "blue";
  context.fillRect(platformX - 50, canvas.height - 20, 100, 10);
}

function drawObjects() {
  context.fillStyle = "red";
  for (let object of objects) {
    context.fillRect(object.x, object.y, OBJECT_SIZE, OBJECT_SIZE);
    object.y += 2; // Скорость падения объектов
    if (object.y > canvas.height) {
      object.y = -OBJECT_SIZE;
      object.x = Math.random() * canvas.width;
    }
    // Проверка на поднятие объектов платформой
    if (
      platformX - 50 < object.x + OBJECT_SIZE &&
      platformX + 50 > object.x &&
      canvas.height - 20 < object.y + OBJECT_SIZE &&
      canvas.height - 10 > object.y
    ) {
      objects.splice(objects.indexOf(object), 1);
      object.y = -OBJECT_SIZE;
      object.x = Math.random() * canvas.width;
    }
  }
}

function handleHandMovement(event) {
  const handX = event.clientX - canvas.getBoundingClientRect().left;
  platformX = handX;
}

function spawnObject() {
  objects.push({ x: Math.random() * canvas.width, y: -OBJECT_SIZE });
}

window.onload = () => {
  startCamera();
  canvas.addEventListener("mousemove", handleHandMovement);
  setInterval(spawnObject, 1500); // Создание объектов каждые 1.5 секунды
};
