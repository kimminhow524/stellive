import axios from "axios";

export const getBlackList = async (ip) => {
  try {
    const { data } = await axios.get(`/tabs/blackList`);
    if (data.some((item) => item.ip === ip)) {
      console.log("This IP is in the black list");
      return true;
    } else {
      console.log("it'ok");
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};

export const dataAll = () => {
  axios
    .get("")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUrlData = (who) => {
  console.log(who);
  try {
    const { result } = axios.get(`/who/${who}`);
    console.log(result);
    const urls = result.data.map(({ url }) => url);
    console.log(urls);
    return urls;
  } catch (err) {
    console.error(err);
  }
};

export const setUrlData = async (params) => {
  try {
    await axios.post(``, params);
  } catch (err) {
    console.error(err);
  }
};
