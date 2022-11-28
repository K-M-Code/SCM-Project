import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",

});

// export default axios.create({
//   baseURL: "http://80.69.175.2:8009/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });