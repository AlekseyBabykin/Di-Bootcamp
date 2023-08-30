const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");
let cameraStream = null;
let playerX = canvas.width / 2;
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
  drawPlayer();
  drawObjects();

  requestAnimationFrame(() => gameLoop(video));
}

function drawPlayer() {
  context.fillStyle = "blue";
  context.fillRect(playerX - 25, canvas.height - 50, 50, 50);
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
    // Проверка на столкновение
    if (
      playerX - 25 < object.x + OBJECT_SIZE &&
      playerX + 25 > object.x &&
      canvas.height - 50 < object.y + OBJECT_SIZE &&
      canvas.height > object.y
    ) {
      objects.splice(objects.indexOf(object), 1);
      object.y = -OBJECT_SIZE;
      object.x = Math.random() * canvas.width;
    }
  }
}

function handleHandMovement(event) {
  const handX = event.clientX - canvas.getBoundingClientRect().left;
  playerX = handX;
}

function spawnObject() {
  objects.push({ x: Math.random() * canvas.width, y: -OBJECT_SIZE });
}

window.onload = () => {
  startCamera();
  canvas.addEventListener("mousemove", handleHandMovement);
  setInterval(spawnObject, 1500); // Создание объектов каждые 1.5 секунды
};
