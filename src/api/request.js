import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
  baseURL: "/api",
  //Timeout after 5s of fetching the data
  timeout: 5000,
});

// Configuring things before we send out the request
requests.interceptors.request.use((config) => {
  //config has header

  //We want to progress bar start from here
  nprogress.start();
  return config;
});

//Configureing things after we get the response
requests.interceptors.response.use(
  (res) => {
    //We want to end the progress bar from here
    nprogress.done();
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);

export default requests;
