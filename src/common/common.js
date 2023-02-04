import Swal from "sweetalert2";

export const validationUrl = (value) => {
  const youtubeUrl =
    /(http:|https:)?(\/\/)?(www\.)?(youtube.com|youtu.be)\/(watch|embed)?(\?v=|\/)?(\S+)?/g;
  console.log("test:", youtubeUrl.test(value));
  return youtubeUrl.test(value);
};

export const insertFail = (failCode) => {
  //failcode 400 : db연결 오류
  //500 :
  let toastText = "";
  if (failCode === 400) {
    toastText = "서버 오류입니다. 다음에 다시 시도해주세요.";
  } else if (failCode === 401) {
    toastText = "해당 IP는 영상을 등록할수 없습니다.";
  } else if (failCode === 500) {
    toastText = "해당 url은 유튜브 영상이 아닙니다.";
  } else {
    toastText = "알수없는 오류입니다.";
  }
  const Toast = Swal.mixin({
    toast: true,
    position: "center-center",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "error",
    title: toastText,
  });
};
