import axios from "axios";

const options = {
  baseURL: "https://api.themoviedb.org/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTVhZDZjMmM2YmFkNTFlZDlhMDBkYzg2ZTk1MjZlNiIsIm5iZiI6MTcxMDYwNzQwOS4xNDcsInN1YiI6IjY1ZjVjYzMxZDRhNjhiMDE0YzI4YzAzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h2dfZd3iBMKJrQ6_KlHtTvZ52fwgZnTHtuXsdN5Kvhg`,
  },
};

const API = axios.create(options);

API.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const { status: statusCode, data } = err.response;
    return Promise.reject({ statusCode, ...data });
  }
);

export default API;
