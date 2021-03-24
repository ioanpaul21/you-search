import axios from "axios";

const KEY = "AIzaSyCPx8AVOswIHKax_oIFyNp1n4GRbxzhooo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: KEY,
  },
});
