import React from 'react';
// import URLBlock from './URLBlock';
// import BodyBlock from './BodyBlock';
// import HeaderBlock from './BlockHeader';
// import NetworkBlock from './BlockNetwork';

import Blocks from './Block';

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


const Catch: React.FC<CatchProps> = ({ requests, deleteRequest }) => {
  // console.log(requests)
  return (
    <div className="flex flex-col flex-wrap justify-start min-w-80">
      {requests.length > 0 ?
        requests.map(data => <Blocks data={data} deleteRequest={deleteRequest} key={data.id}/>) :
        <p>No requests stored in Redis.</p>}
    </div>
  );

}




export default Catch;
