import {useParams} from "react-router-dom";
import VIDEOS from "../videos.json";


const Video = () => {

  const { id } = useParams();
  console.log(id);

  let videoFound = null;

  VIDEOS.forEach((video) => {
    if(video.id === Number(id)) {
      videoFound = video;
    }
  });

  if(videoFound != null) {
  return (
      <div>
        <h3>{videoFound.title}</h3>
        <video src={videoFound.url} ></video>
        <p>{videoFound.url}</p>
      </div>
  );}

    return (
        <h3>This video does not exist</h3>
    );
};


export default Video;