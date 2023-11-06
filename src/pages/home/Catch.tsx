import React from 'react';
import URLBlock from './URLBlock';

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

interface CatchProps {
  requests: RequestData[];
  deleteRequest: (requestId: string) => void;
}

interface DetailsProps {
  title: string;
  entries: Array<[string, any]>;
}

const RequestDetails: React.FC<DetailsProps> = ({ title, entries }) => (
  <div className="border-black-500 font-bold flex-grow mr-5">
    <h3>{title}</h3>
    <div className="ml-5">
      {entries.map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value.toString() }
        </p>
      ))}
    </div>
  </div>
);




interface CardProps {
  data: { 
    [key: string]: any; 
    id: string;
  };
  deleteRequest: (id:string) => void;
}

// interface DetailsPropsURL {
//   title: string;
//   url: string;
// }

// const RequestDetailsURL: React.FC<DetailsPropsURL> = ({ title, url }) => (
//   <div className="border-black-500 font-bold flex-grow mr-5">
//     <h3>{title}</h3>
//     <div className="ml-5">
//       <div>{url}</div>
//     </div>
//   </div>
// );

const RequestCard: React.FC<CardProps> = ({ data, deleteRequest }) => {
  
  return (
    <div key={data.id} className="border-green-500 p-2 mb-5 w-80">
      <h2>Request id: {data.id} {data.Datetime}</h2>
      <div className="flex justify-end mb-2.5">
        <button className="bg-red-500 text-white p-2 rounded cursor-pointer" onClick={() => deleteRequest(data.id)}>Delete</button>
      </div>
      <div className="border-red-500 p-2 mt-2.5 flex flex-row flex-nowrap justify-start">
       <URLBlock title="URL" url={data.URL.toString()}/>
        <RequestDetails title="Network:" entries={Object.entries(data.Network || {})}/>
        <RequestDetails title="Request Headers:" entries={Object.entries(data.Request_Headers || {})}/>
        <RequestDetails title="Request Body:" entries={Object.entries(data.Request_Body || {})}/>
      </div>
    </div>);
}

// interface CardProps {
//   data: { [key: string]: any; id:  string; };
//   deleteRequest: (id:  string) => void;
// }

const Catch: React.FC<CatchProps> = ({ requests, deleteRequest }) => (
  <div className="flex flex-col flex-wrap justify-start min-w-80">
    {requests.length > 0 ?
      requests.map(data => <RequestCard data={data} deleteRequest={deleteRequest}/>) :
      <p>No requests stored in Redis.</p>}
  </div>
);


export default Catch;
