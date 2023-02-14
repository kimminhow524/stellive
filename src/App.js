import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Video from "./view/video";
import { db } from "./common/fireBase";
import "./assets/css/App.css";
import { Insert } from "./popup/Modal";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  const [playList, setPlayList] = useState([
    "https://www.youtube.com/watch?v=YJJbVAPTZLg",
  ]);
  const [member, setMember] = useState("yuni");
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
    <div className={"App " + member}>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">StelLive</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                member === "yuni" ? setMember("kanna") : setMember("yuni");
              }}
            >
              멤버변경
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                popupOn(true);
              }}
            >
              영상등록
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="text-center ">
        <Video playList={playList}></Video>
        {popup === true ? (
          <Insert popup={popup} popupOn={popupOn}></Insert>
        ) : null}
      </Container>
    </div>
  );
}

export default App;
