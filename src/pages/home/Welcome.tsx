import React from 'react';
import axios from 'axios';

interface WelcomeProps {
  setRequests: React.Dispatch<React.SetStateAction<any[]>>;
}

const Welcome: React.FC<WelcomeProps> = ({ setRequests }) => {
  const sendTestRequest = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const requestData = {
      key1: 'value1',
      key2: 'value2'
    };

    axios.post('http://127.0.0.1:802/my-api/', requestData)
      .then(response => {
        try {
          const responseData = response.data.map((data: string) => JSON.parse(data));
          setRequests(prevRequests => [...prevRequests, ...responseData]);
        } catch (error) {
          console.error('Error parsing JSON response:', error);
          alert('Error parsing JSON response. Please try again.');
        }
      })
      .catch(error => {
        console.error('Error sending request:', error);
        alert('Error sending request. Please try again.');
      });
  };

  return (
    <div className="font-sans text-center p-8">
      <h1 className="text-gray-700">Welcome to the Web App Testing Service</h1>
      <p className="text-gray-600">Our service is designed to help you test your web applications effectively.</p>
      <p>Click the button below to send a test request via our API:</p>
      <a href="#" className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white no-underline rounded hover:bg-blue-700" onClick={sendTestRequest}>Send Test Request</a>
    </div>
  );
};

export default Welcome;
