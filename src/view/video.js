import ReactPlayer from "react-player/lazy";

const Video = ({ playList }) => {
  const setPlayList = playList.sort(() => Math.random() - 0.5);
  return (
    <div className="wrapper">
      <ReactPlayer
        className="player"
        url={setPlayList} // 플레이어 url
        muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
        playing={true}
        controls={true} // 플레이어 컨트롤 노출 여부
        light={false} // 플레이어 모드
        pip={true} // pip 모드 설정 여부
        width="100%"
        height="80%"
      />
    </div>
  );
};

export default Video;
