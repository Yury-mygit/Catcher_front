// api.ts
import axios from 'axios';

export const sendTestRequest = () => {
  if (typeof process.env.REACT_APP_API_URL !== 'string') throw new Error('API URL is not defined');
  
  const requestData = { key1: 'value1', key2: 'value2' };

  return axios.post(process.env.REACT_APP_API_URL, requestData);
};
