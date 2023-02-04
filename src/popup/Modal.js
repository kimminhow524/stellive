import { async } from "@firebase/util";
import axios from "axios";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { insertFail, validationUrl } from "../common/common";
import { db } from "../common/fireBase";

export const Modal = ({ popup, popupOn }) => {
  const [ip, setIp] = useState();
  //유저 ip 등록
  useEffect(() => {
    axios.get("https://geolocation-db.com/json/").then((res) => {
      setIp(res.data.IPv4);
    });
  }, [ip]);

  const inputModal = () => {
    Swal.fire({
      title: "추가하고 싶은 영상의 url을 입력하세요.",
      html:
        '<select id="swal-input2" class="swal2-input" placeholder="url"><option class="swal2-input" value="uni">유니</option><option class="swal2-input" value="kanna">칸나</option></select>' +
        '<input id="swal-input1" class="swal2-input" placeholder="url">',
      preConfirm: function () {
        return new Promise((resolve) => {
          resolve({
            url: document.getElementById("swal-input1").value,
            who: document.getElementById("swal-input2").value,
          });
        });
      },
      showCancelButton: true,
      confirmButtonText: "완료",
      cancelButtonText: "취소",
      footer: "영상이 아닐경우 ip가 차단될수 있습니다.",
    }).then((result) => {
      if (result.value && result.isConfirmed) {
        if (validationUrl(result?.value?.url)) {
          const params = {
            url: result?.value?.url,
            ip: ip,
            choice: result?.value?.who,
          };
          //  setData(params);
          popupOn(false);
        } else {
          popupOn(false);
          insertFail(500);
        }
      } else if (result.isDismissed || result.isDenied) {
        popupOn(false);
      }
    });
  };

  const setData = async (params) => {
    try {
      const data = await addDoc(collection(db, "youtube"), params);
      console.log(data.id);
    } catch (e) {
      console.log("fireBase", e);
    }
  };

  const blackListCheck = async () => {
    // Create a query against the collection.
    try {
      let data = {};
      const docRef = query(collection(db, "blacklist"), where("ip", "==", ip));
      const docSnap = await getDocs(docRef);
      console.log(docSnap);
      docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data = doc.data();
      });
      console.log(data);
      if (data) {
        //blackList
        console.log("he is black List");
      } else {
        console.log("ok");
      }
    } catch (e) {
      console.log(e);
    }

    return true;
  };

  /*
    db로 보내주는 패턴
    */
  return (
    <>
      <button
        onClick={() => {
          blackListCheck();
        }}
      />
    </>
  );
};
