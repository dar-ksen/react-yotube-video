import axios from "axios";

const KEY = "AIzaSyBZwfKZWxf2O8ZWqx2ZutjvM9L2vCWeM_Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
