import axios from 'axios';
import { useLoginUserStore } from '../stores/store';

axios.defaults.baseURL = 'http://localhost:8080';

export const noTokenApi = async (url, method, data) => {
  const body = await axios({
    url,
    method,
    data,
  });

  return body.data;
};

export const editTokenApi = async (url, method, data, token) => {
  const body = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return body.data;
};
