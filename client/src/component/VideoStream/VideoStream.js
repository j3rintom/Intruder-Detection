import React, { useEffect, useRef } from 'react';

function VideoStream() {
  const videoRef = useRef(null);

  useEffect(() => {
    startVideoStream();
  }, []);

  const startVideoStream = async () => {
    const videoElement = videoRef.current;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoElement.srcObject = stream;

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      const sendVideo = () => {
        if (videoElement.videoWidth && videoElement.videoHeight) {
          canvas.width = videoElement.videoWidth;
          canvas.height = videoElement.videoHeight;

          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(async (blob) => {
            if (blob) {
              const videoInput = await blob.arrayBuffer();

              fetch('http://localhost:8080/video_feed', {
                method: 'POST',
                body: videoInput,
              });
            }
          }, 'image/jpeg', 0.8);
        }

        requestAnimationFrame(sendVideo);
      };

      sendVideo();
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default VideoStream;
