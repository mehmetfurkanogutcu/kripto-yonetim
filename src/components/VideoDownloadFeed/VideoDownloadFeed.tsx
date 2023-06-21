import React from 'react';

class VideoDownloadFeed extends React.Component {
  state = {
    videoUrl: '',
  };

  handleUrlChange = (event: any) => {
    this.setState({ videoUrl: event.target.value });
  };

  downloadReelsVideo = () => {
    const { videoUrl } = this.state;
    const savePath = 'video.mp4';

    fetch(videoUrl)
      .then(response => response.blob())
      .then(blob => {
        const videoObjectUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = videoObjectUrl;
        a.download = savePath;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Videoyu otomatik olarak oynatmak için yeni bir sekme aç
        const videoWindow = window.open(videoObjectUrl);
        if (videoWindow) {
          videoWindow.opener = null;
        }

        URL.revokeObjectURL(videoObjectUrl);
      })
      .catch(error => {
        console.error('Video indirme başarısız oldu:', error);
      });
  };

  render() {
    const { videoUrl } = this.state;

    return (
      <div>
        <input type="text" value={videoUrl} onChange={this.handleUrlChange} placeholder="Video URL'sini girin" />
        <button onClick={this.downloadReelsVideo}>İndir</button>
      </div>
    );
  }
}

export default VideoDownloadFeed;
