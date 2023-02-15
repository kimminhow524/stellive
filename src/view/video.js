import ReactPlayer from "react-player/lazy";

const Video = ({ playList }) => {
  const shuffledPlaylist = playList.sort(() => Math.random() - 0.5);

  return (
    <div className="wrapper">
      <ReactPlayer
        className="player"
        url={shuffledPlaylist} // set url to the first video URL in the playlist
        muted={false}
        playing={true}
        controls={true}
        light={false}
        pip={true}
        width="100%"
        height="80%"
      />
    </div>
  );
};

export default Video;
