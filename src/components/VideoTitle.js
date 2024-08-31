

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="text-black bg-white py-2 px-4 rounded-lg hover:bg-opacity-75">▶️Play</button>
        <button className="text-white bg-gray-600 py-2 px-4 rounded-lg mx-4">❕More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle