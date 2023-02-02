import Swal from "sweetalert2";

export const inputModal = (ip) => {
  Swal.fire({
    title: "추가하고 싶은 url을 입력하세요.",
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
  }).then(
    (result) => {
      if (result.value && result.isConfirmed) {
        console.log(result.value);
        const params = {
          url: result?.value?.url,
          ip: ip,
          choice: result?.value?.who,
        };
        console.log(params);
      }
      // if (!ipCheck(ip)) {
      //   console.log(result);
      //  return false;
      // }
    }
    /** 1. 유튜브 url이 아닐경우
     *  3. ip 저장
     * */
  );
};

export const ipCheck = (ip) => {
  //  ip주소가 차단된 ip일 경우
  const blackList = [];

  if (blackList.find((el) => el === ip)) {
    Swal.fire({
      title: "해당 IP는 영상을 등록할수 없습니다.",
      icon: "warning",
      text: "자세한 사항은 문의 바랍니다.",
    });
    return false;
  }
  return true;
};
