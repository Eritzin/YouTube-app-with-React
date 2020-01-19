import axios from "axios";

//const KEY ="AIzaSyBgcpXAM-vNNbWeB3z7f5iQtQ-rxd5Y46Q";
const KEY ="AIzaSyA3_UcuPQ1RQDOU1pxWy7XYO07ludBbowg";

export default axios.create({
baseURL:"https://www.googleapis.com/youtube/v3",
params:{
    part:"snippet",
    maxResults:5,
    key:KEY
}

});