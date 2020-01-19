import React from 'react';
import API from "./configs/youtube.js";
import './App.css';
import Search from './components/Search';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';




class App extends React.Component {
  state = {
    videos: [],
    selectedVideo:false
  };

  componentDidMount() {
    this.searchVideo("Takeo Ischi");
  }

  searchVideo = async term => {
    const response = await API.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data.items);
    this.setState({
      videos: response.data.items
    })

  };

  onVideoSelect=(video)=>{
    this.setState({
      //selectedVideo: video.id
      selectedVideo: video
    })

    console.log(this.state.selectedVideo)
    
    
  }


  render() {

    const {videos}=this.state;
    const {selectedVideo}=this.state
  
   
   //const id= selectedVideo.id

    return (
      <div className="App">
        <Search searchVideo={this.searchVideo} />
        <div className="row" >
        <VideoDetail video={selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={videos} />
        </div>
      </div>)
  }
}
export default App;
