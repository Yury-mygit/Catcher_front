// api.ts
import axios from 'axios';
import { Network, RequestData, Props } from '../../types';


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

export const getAllRequests = async () => {
    let responseObj = {
      status: "",
      error_description: "",
      data: [] as RequestData[],  // Initialized as empty array
    };
  
    if (typeof process.env.REACT_APP_REQUEST_API_URL !== "string") {
      responseObj.status = "error";
      responseObj.error_description = "REACT_APP_REQUEST_API_URL is not defined";
    } else {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_REQUEST_API_URL}/get_all_requests/`
        );
        responseObj.status = "success";
        responseObj.data = response.data; // Data is expected to be of RequestData[]
      } catch (error: any) {
        responseObj.status = "error";
        if (error !== null) {
          if (typeof error === "object" && "message" in error) {
            responseObj.error_description = String(error.message);
          } else if (typeof error === "string") {
            responseObj.error_description = error;
          } else {
            responseObj.error_description = "An unknown error occurred";
          }
        } else {
          responseObj.error_description = "Error object is null";
        }
      }
    }
  
    return responseObj;
  };
  