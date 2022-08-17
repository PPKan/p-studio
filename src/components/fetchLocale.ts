import axios from "axios";

export default async function fetchLocale() {
  var config = {
    method: "get",
    url: "http://localhost:1337/api/ens/3?populate=deep", 
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      return response.data.data.attributes.Navbar
    })
    .catch(function (error) {
      console.log(error);
    });
}
