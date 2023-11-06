import React, { useState, useEffect } from 'react';
import { sendTestRequest, getAllRequests } from '../api/api'; // import your function
import Welcome from './Welcome';
import Catch from './Catch';
import { Network, RequestData, Props } from '../../types';




let deleteRequest = (a:string) => {
  a = 'fhf'
}

const Home = (props: Props) => {
 const [requests, setRequests] = useState<RequestData[]>([]);

 useEffect(() => {
   const fetchAllRequests = async () => {
     try {
       const response = await getAllRequests();  // Using the imported function
  
       if(response.status === 'success'){
         setRequests(response.data);
       } else {
         alert(response.error_description);
       }

     } catch (error: any) {
       console.error(error);
     }
   }

   fetchAllRequests();
 }, []);

 return (
   <div>
     <Welcome setRequests={setRequests} /> 
     <Catch requests={requests} deleteRequest={deleteRequest} />
   </div>
 );
};

export default Home;
