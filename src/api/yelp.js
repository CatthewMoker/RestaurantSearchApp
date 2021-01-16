import axios from "axios";
import Constants from "expo-constants";

export default axios.create({
  baseURL: Constants.manifest.baseUrl,
  headers: {
    Authorization: `Bearer ` + Constants.manifest.bearerToken,
  },
});
