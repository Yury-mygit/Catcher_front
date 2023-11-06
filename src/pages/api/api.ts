// api.ts
import axios from 'axios';

export const sendTestRequest = () => {
    if (typeof process.env.REACT_APP_API_URL !== 'string') {
        throw new Error('REACT_APP_API_URL is not defined');
    }

    const requestData = {
        key1: 'value1',
        key2: 'value2'
    };

    return axios.post(process.env.REACT_APP_API_URL, requestData);
};

export const getAllRequests = () => {
    if (typeof process.env.REACT_APP_REQUEST_API_URL !== 'string') {
        throw new Error('REACT_APP_REQUEST_API_URL is not defined');
    }

    return axios.get(`${process.env.REACT_APP_REQUEST_API_URL}/get_all_requests/`);
};