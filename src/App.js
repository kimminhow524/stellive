import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./assets/css/App.css";
import { db } from "./common/fireBase";
import { Modal } from "./popup/Modal";
import Video from "./view/video";

function App() {
  const [playList, setPlayList] = useState([
    "https://www.youtube.com/watch?v=w_RcVW8YW4Q",
  ]);
  const [member, setMember] = useState(["yuni"]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    readData();
  }, [member]);

  const popupOn = (data) => {
    setPopup(data);
  };

  const readData = async () => {
    try {
      const q = query(collection(db, "youtube"), where("who", "==", member));
      const querySnapshot = await getDocs(q);
      let url = [];
      querySnapshot.forEach((doc) => {
        const data = JSON.stringify(doc.data().url);
        url.push(data);
      });
      setPlayList(url);
    } catch (e) {
      console.log("dataSetError", e);
    }
  };

  return (
    <div className="App">
      <header className={"App-header " + member}>
        <button
          onClick={() => {
            setPopup(true);
          }}
        >
          등록test
        </button>
        <button
          onClick={() => {
            member === "yuni" ? setMember("kanna") : setMember("yuni");
          }}
        >
          멤버변경test
        </button>
        <h4>stelLive</h4>
        <Video playList={playList}></Video>
        {popup === true ? (
          <Modal popup={popup} popupOn={popupOn}></Modal>
        ) : null}
      </header>
    </div>
  );
}

export default App;
