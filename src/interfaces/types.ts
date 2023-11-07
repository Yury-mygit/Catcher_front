export interface Network {
   address: string;
   family: string;
   port: string;
}

export interface RequestData {
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

export type Props = {};