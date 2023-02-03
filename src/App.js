import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./assets/css/App.css";
import { db } from "./common/fireBase";
import { Modal } from "./popup/Modal";
import Video from "./view/video";

function App() {
  const [playList, setPlayList] = useState([
    "https://www.youtube.com/watch?v=w_RcVW8YW4Q",
  ]);
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    readData();
  }, []);
  const popupOn = (data) => {
    setPopup(data);
  };
  const readData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "youtube"));
      querySnapshot.forEach((doc) => {
        setPlayList(JSON.stringify(doc.data()));
      });
      console.log(playList);
    } catch (e) {
      console.log("dataSetError", e);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            setPopup(true);
          }}
        >
          test button
        </button>
        <h4>stelLive</h4>
        {/* <Video playList={playList}></Video> */}
        {popup === true ? (
          <Modal popup={popup} popupOn={popupOn}></Modal>
        ) : null}
      </header>
    </div>
  );
}

export default App;
