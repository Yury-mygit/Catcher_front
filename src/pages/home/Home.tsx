import React, { useState, useEffect } from 'react'; 
import { sendTestRequest, getAllRequests } from '../api/api'; // import your function
import Welcome from './Welcome'; 
import Catch from './Catch';

type Props = {};

interface Network {
  address: string; 
  family: string; 
  port: string; 
}

interface RequestData {
  id: string;
  Datetime: string; 
  URL: string; 
  Network: {
    local: Network; 
    remote: Network;
  };
  Request_Headers: Record<string, string>; 
  Request_Body: Record<string, string>; 
}

let deleteRequest = (a:string) => {
  a = 'fhf'
}

const Home = (props: Props) => {
 const [requests, setRequests] = useState<RequestData[]>([]);

 useEffect(() => {
  getAllRequests() // using the imported function
    .then((response: { data: RequestData[]}) => { // add a type for response here
      // console.log(response.data)
      setRequests(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });
 }, []);

 return ( 
    <div>
      <Welcome setRequests={setRequests} /> 
      <Catch requests={requests} deleteRequest={deleteRequest} />
    </div> 
 );
};

export default Home;