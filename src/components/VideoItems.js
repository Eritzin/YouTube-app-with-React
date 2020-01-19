import React from "react";

class VideoItems extends React.Component {

  handleClick = (video) => {
    const { onVideoSelect } = this.props;
    console.log("waoooo")
    onVideoSelect(video)

  }

  render() {
    const { video } = this.props;
    const { title } = video.snippet;
    const videoId = video.id.videoId;
   
    const thumbnails = video.snippet.thumbnails.medium.url;
    return (
      <div>
        <div className="content" key={videoId} onClick={() => this.handleClick(video)} >
          <div className="thumbnail">
            <img alt={title} src={thumbnails} />
          </div>
          <div className="title">{title}</div>

        </div>
      </div>
    );
  }
}

export default VideoItems;