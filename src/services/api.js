import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjA0MzQ4YTlhOTIzMzY2NTg0NzUxZDY0ZTc1NDIzZiIsInN1YiI6IjVmYWFiYzcwMmEwOWJjMDA0MThlODI2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gFWvilnXld3rm7-LN333OU-TAu-wJiJzLv-9r5w94jM";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
