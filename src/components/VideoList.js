import React from "react";
import VideoItems from "./VideoItems.js"
const renderVideos=(videos,props)=>{
  console.log("videos")
   const result=[];
   
   videos.map(video=>{
       const newVideoObj={...video};
       const {onVideoSelect}=props;
       result.push(<VideoItems video={newVideoObj} key={newVideoObj.id} onVideoSelect={onVideoSelect}/>)        
      })

   return result;  
};

function VideoList(props){
const {videos}=props;
return <div className="videoLists">{renderVideos(videos,props)}</div>;

}

export default VideoList;
