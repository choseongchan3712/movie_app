import fetch from "node-fetch";
// const fetch = require("node -fetch"); 이렇게도 가능 함

const baseUrl = "https://api.themoviedb.org/3/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjgxNDNhYWZhNzlmNzBiODg5NDdiYzZhOThhNGNjMCIsIm5iZiI6MTczMDI2MzAyOS42MjAxNDg0LCJzdWIiOiI2NzIxYjQ1NTgyNmZlNTc5OWNjNGE3NmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7q59cSNpTBjE4_OUirV4gRcERwvhXu1h1fgbg6aPZ-M",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());
export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

//! 동기화

//! 비동기화(Promise)
