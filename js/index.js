const video = document.querySelector("#video");

navigator.mediaDevices
  .getUserMedia({
    video: true,
  })
  .then((stream) => {
    video.srcObject = stream;
  });
