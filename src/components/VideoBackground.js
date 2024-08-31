import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";

const VideoBackground = ({movieId}) => {

  //To make youtube trailer dynamic we will useState
  let [trailerId, setTrailerId] = useState(null);

  //fetch trailer video

  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
    const response = await data.json();
    //console.log(response);


    //filterData can have multiple videos
    const filterData = response.results.filter(video => video.type === 'Trailer');
    //We will take first video of filterData
    const trailer = filterData.length ? filterData[0] : response.results[0];
    setTrailerId(trailer.key);
    console.log(trailer);
  };

  useEffect(()=>{
    getMovieVideo();
  },[]);

  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/"+trailerId+'?autoplay=1&mute=1'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
};

export default VideoBackground;