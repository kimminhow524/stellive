import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "./fireBase";
/**
export const setUrl = (params) => {
  try {
    addDoc(collection(firestore, ""), params);
  } catch (e) {
    console.error(e);
  }
};

export const readData = () => {
  const query = getDocs(collection(firestore, "youtube"));
  console.log(query);
};*/
