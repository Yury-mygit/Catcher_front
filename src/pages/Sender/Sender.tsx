import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import ActiveTextArea from '../../components/ActiveTextatea'
import SelectMethod from "../../components/SelectMethods";

const isJson = (str: string) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

const isXML = (str: string) => {
  const parser = new DOMParser().parseFromString(str, 'text/xml');
  return parser.getElementsByTagName('parsererror').length <= 0;
}

const isFormData = (str: string) => {
  // Add your form data validation logic here
  return /^[^=&\n]+={1}[^=&\n]+$/.test(str);
}

interface ResponseType {
  [key: string]: any;
}

const Sender = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [dataType, setDataType] = useState('Data is not valid');

  const sendRequest = async () => {
    try {
      const res = await axios({ url, method, data: body });
      setResponse(res.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setResponse({ error: axiosError.message });
    }
  };

  const handleChange = (data: string) => {
    setBody(data);
    if(isJson(data)){
      setIsValid(true);
      setDataType('JSON')
    }
    else if(isXML(data)){
      setIsValid(true);
      setDataType('XML')
    }
    else if(isFormData(data)){
      setIsValid(true);
      setDataType('FORM DATA')
    } else {
      setIsValid(false);
    }
  }

  return (
    <div className="flex flex-col space-y-2 max-w-3xl mx-auto">
      <div className={"flex"}>
        <input className="border p-2 text-xs grow" type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <SelectMethod value={method} onChange={setMethod}/>
      </div>

      <ActiveTextArea value={{ isValid, body }} handleChange={handleChange} />
      <span>{dataType}</span>
      <button className="border p-2" onClick={sendRequest}>Send</button>
      {response && <div className="p-2 border">{JSON.stringify(response)}</div>}
      <div>

      </div>
    </div>
  );
}

export default Sender;


      // <select value={method} onChange={e => setMethod(e.target.value)} style={{ border: '1px solid black' }}>
      //   <option value="GET">GET</option>
      //   <option value="POST">POST</option>
      //   <option value="PUT">PUT</option>
      //   <option value="DELETE">DELETE</option>
      // </select>



    // const [textAreaHeight, setTextAreaHeight] = useState('auto');

  // useEffect(() => {
  //   const textAreaElement = document.getElementById('requestBody');
  //   if (textAreaElement) {
  //     let newHeight = `${textAreaElement.scrollHeight}px`;
  //     if (textAreaElement.scrollHeight > 500) {
  //       newHeight = '500px';
  //     }
  //     setTextAreaHeight(newHeight);
  //   }
  // }, [body]);