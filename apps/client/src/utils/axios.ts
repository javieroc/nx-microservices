import axios from 'axios';

const baseURL = `${process.env.REACT_APP_API_URL}/api/v1`;

const api = axios.create({
  baseURL,
});

api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common.Accept = 'application/json';

const setAuthHeader = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

const removeAuthHeader = () => {
  delete api.defaults.headers.Authorization;
};

export { api, setAuthHeader, removeAuthHeader, baseURL };
