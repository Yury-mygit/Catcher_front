import React, { useState, useEffect } from 'react';
import sendRequest from "../../api/api";
import ActiveTextArea from '../../components/ActiveTextatea';
import Validator from "../../validators/validator";
import { Methods } from "./Methods";
import { RequestBar } from "./RequestBar";
import { ButtonGroup } from "./ButtonGrope";

interface RequestUnitProps {
  data: any; // Replace with the type of your data
}

interface ResponseType {
  [key: string]: any;
}


const RequestUnit = ({ data }: RequestUnitProps) => {

  // const [title, setTitle] = useState("Title of component");
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [params, setParams] = useState('');
  const [headers, setHeaders] = useState('');
  const [authorization, setAuthorization] = useState('');
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

  const handleTextChange = (data: string) => {
    setText(data);
    let a = Validator.validate(data);
    if (a !== false) {
      setIsValid(true);
      setDataType('Data is valid');
      setBody(a.data);
    } else {
      setIsValid(false);
      setDataType('Data is not valid');
    }
  };


  useEffect(() => {
    // setTitle(data.title || "Title of component");
    setUrl(data.url || '');
    setMethod(data.method || 'GET');
    setParams(data.params || '');
    setHeaders(data.headers || '');
    setAuthorization(data.authorization || '');
    setBody(data.body || '');
    setText(JSON.stringify(data.body, null, 2) || '');
    setResponse(data.response || null);
    setIsValid(data.isValid || false);
    setFormat(data.format || 'JSON');
    setDataType(data.dataType || 'Data is not valid');
  }, []);

  return (
    <div className="RequestUnit_wrapper flex grow flex-col mb-5 m-10">
      <h1 className="text-2xl">{data.title}</h1>
      <div className="flex flex-row">
        <div className="request flex flex-col mr-5" style={{ flex: 2 }}>
        <div className="flex flex-row">
          <div className="controls flex flex-col pl-2 pr-2 mb-2">
            <RequestBar
              method={method}
              setMethod={setMethod}
              url={url}
              setUrl={setUrl}
              handleSendRequest={handleSendRequest}
              dataType={dataType}
            />
            <div className="flex flex-row">
              <ButtonGroup />
              <Methods id={data.id} format={format} setFormat={setFormat} />
            </div>
          </div>
          <ActiveTextArea value={{ isValid, text , body, format}} handleChange={handleTextChange} />
        </div>
      </div>
      <div className="response flex flex-col border-0 border-amber-950 border-solid text-xs " style={{ flex: 1 }}>
        {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
      </div>
      </div>

    </div>
  );
}

export default RequestUnit;


//  {/*{response && <pre>{JSON.stringify(JSON.parse(response), null, 2)}</pre>}*/}