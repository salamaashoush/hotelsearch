import axios from "axios";
import Api from "../api";

// const AUTH_TOKEN = 'access_token';

const customRequest = axios.create({
  baseURL: Api.baseURL
  // headers: { Authorization: AUTH_TOKEN }
});

export const httpClient = {
  get: customRequest.get,
  post: customRequest.post,
  put: customRequest.put,
  del: customRequest.delete
};
