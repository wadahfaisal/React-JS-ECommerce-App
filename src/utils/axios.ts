import axios from "axios";

// export const fetchWithCredentials = axios.create({
//
//   baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
// });

// fetchWithCredentials.defaults.withCredentials = true;

export const fetchWithoutCredentials = axios.create({
  // baseURL: "https://ecommerce-api-9t8b.onrender.com/api/v1",
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`,
});
