class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    console.log(
      `uploader ${this.uploader} watched all time ${this.time} of title ${this.title}!`
    );
  }
}
const firstVideo = new Video("comedy", "Alex", 58);

firstVideo.watch();
const secondVideo = new Video("killer", "Chuk", 89);
secondVideo.watch();

const infotion = [
  ["title1", "uploader1", 111],
  ["title2", "uploader2", 222],
  ["title3", "uploader3", 333],
  ["title4", "uploader4", 444],
  ["title5", "uploader5", 555],
];
for (el of infotion) {
  const a = new Video(el[0], el[1], el[2]);
  a.watch();
}
