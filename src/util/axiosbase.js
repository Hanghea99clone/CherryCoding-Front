import axios from "axios";

export const acuxios = axios.create({
  baseURL: process.env.REACT_APP_API,
});
