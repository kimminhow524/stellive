import axios from "axios";
import "./assets/css/App.css";
import { dataAll, getUrlData } from "./assets/js/db";
import Video from "./assets/js/video";
import { Modal } from "./popup/Modal";

function App() {
  let playList = "https://www.youtube.com/watch?v=i_hdQMjibbU";
  dataAll();
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
