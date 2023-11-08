import * as React from 'react';
import SelectMethod from "../../components/SelectMethods";

type Props = {
  method: string;
  setMethod: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  handleSendRequest: () => void;
  dataType: string;
};

export const RequestBar = ({ method, setMethod, url, setUrl, handleSendRequest, dataType }: Props) => {
  return (
    <div className="flex flex-col h-10 mb-10">

        <div className="flex flex-row">
          <SelectMethod value={method} onChange={setMethod}/>
          <input
            className="border p-2 text-xs grow"
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="URL"
          />
          <button className="border p-2 w-20 text-xs" onClick={handleSendRequest}>Send</button>
        </div>
        <div className="text-xs w-32 flex items-center justify-center">{dataType}</div>
    </div>
  );
};
