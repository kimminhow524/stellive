import "./assets/css/App.css";
import { readData } from "./common/fireBase";
import Video from "./common/video";

function App() {
  let playList = "https://www.youtube.com/watch?v=i_hdQMjibbU";
  readData();
  return (
    <div className="App">
      <header className="App-header">
        <h4>stelLive</h4>
        <Video playList={playList}></Video>
      </header>
    </div>
    //<Modal></Modal>
  );
}

export default App;
