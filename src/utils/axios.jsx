import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTlmOTAzYzNiYzUwZjY4NTEyNjg3MWVkMTVmZWU2OSIsInN1YiI6IjY1Y2ZmNjlkNzcwNzAwMDE4NzlhNTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IEjDqt0PkxA8daQDQfKTEpjpSX8tzJS0-HsFnRrHsXQ",
  },
});
export default instance;