import React from "react";

const VideoDetail =({video})=>{
  if(!video)return<div>Loading...</div>
 
   
 const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`
 const videoTitle =video.snippet.title
 const description=video.snippet.description
 console.log(videoTitle)
 
return (
    <div className="videoDetail">
      <div className="Video">
       <iframe
         title={videoTitle}
         width="840" height="472.5" 
         src={videoUrl} 
         frameBorder="0" 
         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowFullscreen>
    </iframe>
    </div>
    <div className="videoInfo">
        <h2 className="videoTitle">{videoTitle}</h2>
         <p>{description}</p>
    </div>
    </div>)
}



export default VideoDetail;
