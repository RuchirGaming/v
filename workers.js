export default {
  async fetch(request, env, ctx) {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { margin: 0; background: #000; }
            .video-container {
              position: relative;
              width: 100vw;
              height: 100vh;
              overflow: hidden;
            }
            .video-container iframe {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 100vw;
              height: 56.25vw; 
              min-height: 100vh;
              min-width: 177.77vh; 
              transform: translate(-50%, -50%);
            }
          </style>
        </head>
        <body>
          <h1>Split screen for the dream video.exe</h1>
          <div class="video-container">
            <iframe 
              src="https://www.youtube.com/embed/YVgSFTzhzxg?autoplay=1&mute=1" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              allowfullscreen>
            </iframe>
          </div>
        </body>
      </html>
<marquee>fuck this.</marquee>
    `;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
