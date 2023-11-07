import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import sendRequest from "../../api/api";
import ActiveTextArea from '../../components/ActiveTextatea'
import SelectMethod from "../../components/SelectMethods";
import handleInputChange from '../../components/handleInputChange';
import Validator from "../../validators/validator";

interface RequestUnitProps {
  data: any; // Replace with the type of your data
}
const RequestUnit = ({data}:RequestUnitProps) => {

  interface ResponseType {
  [key: string]: any;
}


  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [text, setText] = useState('');
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [format, setFormat] = useState('JSON');
  const [dataType, setDataType] = useState('Data is not valid');


  const handleSendRequest = async () => {
    const res = await sendRequest(url, method, body);
    setResponse(res);
  };



  useEffect(() => {

    setUrl(data.url)

    setBody(data.body)
     setIsValid(true)
            setDataType('Data is valid')
    setText(JSON.stringify(data.body, null, 2));
  }, []);



  return (
  <div className={"RequestUnit_wrapper flex grow flex-row mb-5 m-10"}>
    <div className={"request flex flex-col mr-5"} style={{ flex: 2 }}>
      <div className={"flex h-10 mb-2"}>
        <SelectMethod value={method} onChange={setMethod}/>
        <input className="border p-2 text-xs grow" type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <button className="border p-2 w-20  text-xs" onClick={handleSendRequest}>Send</button>
        <div className="text-xs w-32 flex items-center justify-center">{dataType}</div>
      </div>
      <div className="flex flex-row">
         <div className="flex flex-col justify-between pl-2 pr-2 mb-2">
        <button className="text-left">Params</button>
        <button className="text-left">Authorization</button>
        <button className="text-left">Header</button>
        <button className="text-left">Body</button>
        <button className="text-left">Pre-request Script</button>
        <button className="text-left">Post-request Scripts</button>
        <button className="text-left">Tests</button>

        </div>

      <div className="flex flex-col grow justify-around pl-2 pr-2 mb-2">


          <button className={`w-32 ${format === 'JSON' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>JSON</button>
          <button className={`w-32 ${format === 'FORMDATA' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>FORM DATA</button>
          <button className={`w-32 ${format === 'XML' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>XML</button>

      </div>

         <ActiveTextArea value={{ isValid, text }} handleChange={
        (data) => {
          setText(data);
          let a = Validator.validate(data)
          if (a !== false){
            setIsValid(true)
            setDataType('Data is valid')
            setBody(a.data)
          }
          else {
            setIsValid(false)
            setDataType('Data is not valid')
          }

        }
      } />
      </div>









      {response && <div className="p-2 border">{JSON.stringify(response)}</div>}


    </div>

    <div className={"response flex flex-col border-4 border-amber-950 border-solid text-xs"} style={{ flex: 1 }}>
      sdadsdadad
    </div>
  </div>

  );
}

export default RequestUnit;