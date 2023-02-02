import axios from "axios";
import { useEffect, useState } from "react";
import { inputModal } from "../assets/js/common";

export const Modal = () => {
  const [ip, setIp] = useState();

  //유저 ip 등록
  useEffect(() => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setIp(res.data.IPv4);
    });
  }, []);
  inputModal(ip);

  /*
    db로 보내주는 패턴
    */
  return <></>;
};
