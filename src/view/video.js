import ReactPlayer from "react-player/lazy";

const Video = ({ playList }) => {
  return (
    <>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={playList} // 플레이어 url
          playing={true} // 자동 재생 on
          muted={true} // 자동 재생 on
          controls={true} // 플레이어 컨트롤 노출 여부
          light={false} // 플레이어 모드
          pip={true} // pip 모드 설정 여부
          onEnded={() => {
            return null;
          }} // 플레이어 끝났을 때 이벤트
        />
      </div>
    </>
  );
};

export default Video;
