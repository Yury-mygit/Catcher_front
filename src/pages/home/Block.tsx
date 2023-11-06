import React from 'react';

import URLBlock from './URLBlock';
import BodyBlock from './BodyBlock';
import HeaderBlock from './BlockHeader';
import NetworkBlock from './BlockNetwork';


interface CardProps {
   data: { 
     [key: string]: any; 
     id: string;
   };
   deleteRequest: (id:string) => void;
 }

 
 let networkClass = 'border-solid border-2 border-red-500 p-2 m-2 text-xs flex-grow'


const Blocks: React.FC<CardProps> = ({ data, deleteRequest }) => {
 
  return (
    <div key={data.id} className="border-solid border-2 border-black p-2 m-5" >
      <h2>Request id: {data.id} {data.Datetime}</h2>
      <div className="flex justify-end mb-2.5">
        <button className="bg-red-500 text-white p-2 rounded cursor-pointer" onClick={() => deleteRequest(data.id)}>Delete</button>
      </div>
      <div className="border-red-500 p-2 mt-2.5 flex flex-row flex-nowrap justify-between">
       <div className='techdata w-1/2'>
           <URLBlock title="URL" url={data.URL.toString()} outerclass={networkClass}/>
           <NetworkBlock title="Network:" entries={Object.entries(data.Network || {})} outerclass={networkClass}/>
           <HeaderBlock  title="Request Headers:" entries={Object.entries(data.Request_Headers || {})} outerclass={networkClass}/>
       </div>
       <div className='request w-1/2'>
           <BodyBlock title="Request Body:" entries={Object.entries(data.Request_Body || {})} outerclass={networkClass}/>
       </div>
      </div >
    </div>);
 }

 export default Blocks