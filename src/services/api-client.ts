import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e984b0a3f1c940e8af444eb0e105e89e",
  },
});
