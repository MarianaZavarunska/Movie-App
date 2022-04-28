import axios from "axios";

import { mainBackURL } from "../constants/backendUrls";

const axiosTepmlate = axios.create({
  withCredentials: true,
  baseURL: mainBackURL,
});

// axiosTepmlate.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${accessToken}`;
// });

export default axiosTepmlate;
