import React, { useState } from 'react';
import Welcome from './pages/home/Welcome';  // Import the Welcome component
import Catch from './pages/home/Catch';  // Import the Catch component
import './App.css';

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

function App() {
  const [requests, setRequests] = useState<RequestData[]>([]);  // Add a state for requests

  return (
    <div className="App">
      <Welcome setRequests={setRequests} />  {/* Pass the setRequests function as a prop */}
      <Catch
      requests={requests} deleteRequest={deleteRequest} />  {/* Pass the requests state and the setRequests function as props */}
    </div>
  );
}

export default App;
