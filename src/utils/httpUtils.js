import axios from 'axios';

let get = (url) => {
  return axios.get(url).then(data => {
    return data;
  }).catch(error => console.log(error));
}

let headers = {
  'Authorization': 'Bearer ',
  'Content-Type': 'application/json',
}

let post = (url, body) => {
  return axios.post(url, body, headers).then(data => data).catch(error => console.log(error));
}

export {get, post};
