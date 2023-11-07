import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import sendRequest from "../../api/api";

import SelectMethod from "../../components/SelectMethods";



const Sender = () => {

  interface ResponseType {
  [key: string]: any;
}


  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState<ResponseType | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [dataType, setDataType] = useState('Data is not valid');


  const handleSendRequest = async () => {
    const res = await sendRequest(url, method, body);
    setResponse(res);
  };


  return (

<div className="wrapper flex flex-col space-y-2 max-w-6xl grow mx-auto border-4 border-amber-950 border-solid">
  <div className={"container flex grow flex-row"}>
    <div className={"request flex flex-col"} style={{ flex: 2 }}>
      <div className={"flex"}>
        <input className="border p-2 text-xs grow" type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="URL" />
        <SelectMethod value={method} onChange={setMethod}/>
      </div>

      {/*<ActiveTextArea value={{ isValid, body }} handleChange={(data) => handleInputChange(data, setBody, setIsValid, setDataType)} />*/}
      <span className="text-xs">{dataType}</span>
      <button className="border p-2" onClick={handleSendRequest}>Send</button>
      {response && <div className="p-2 border">{JSON.stringify(response)}</div>}
      <div>

      </div>
    </div>

    <div className={"response flex flex-col border-4 border-amber-950 border-solid text-xs"} style={{ flex: 1 }}>
      sdadsdadad
    </div>
  </div>
</div>
  );
}

export default Sender;

