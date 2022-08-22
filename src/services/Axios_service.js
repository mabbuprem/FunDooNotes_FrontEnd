import axios from 'axios'

const BaseUrl = 'http://127.0.0.1:8000/api';

export  function postService(url, reqpayload, token, httpAuthOptions) {
  return axios.post(BaseUrl + url, reqpayload, token && httpAuthOptions)
}

export function getService(url, token,httpAuthOptions) {
  return axios.get(BaseUrl + url, token && httpAuthOptions)
}

export function deleteService(url, token,httpAuthOptions) {
  return axios.delete(BaseUrl + url, token && httpAuthOptions)
}
