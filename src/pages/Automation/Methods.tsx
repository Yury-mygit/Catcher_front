// @flow
import * as React from 'react';

type Props = {
  id: number;
  format: string;
  setFormat: React.Dispatch<React.SetStateAction<string>>;
};


export const Methods = ({ id, format, setFormat }: Props) => {
    // console.log(format)
    const name = `method${id}`;

    return (
        <div className="flex flex-col justify-start grow justify-around pl-2 pr-2 mb-2 ">

           <div className="flex flex-row justify-start shrink">
                <input
                  type="radio"
                  name={name}
                  id="JSON"
                  checked={format === 'JSON'}
                  className={`w-8 p-0 text-xs ${format === 'JSON' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                  onChange={() => setFormat('JSON')}
                />
                <label className="text-xs" htmlFor="JSON">JSON</label>
          </div>


          {/*<div className="flex flex-row justify-start shrink">*/}
          {/*  <input*/}
          {/*    type="radio"*/}
          {/*    name={name}*/}
          {/*    id="FORMDATA"*/}
          {/*    checked={format === 'FORMDATA'}*/}
          {/*    className={`w-8 p-0 text-xs ${format === 'FORMDATA' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}*/}
          {/*    onChange={() => setFormat('FORMDATA')}*/}
          {/*  />*/}
          {/*  <label className="text-xs" htmlFor="FORMDATA">FORMDATA</label>*/}
          {/*</div>*/}


          {/*  <div className="flex flex-row justify-start shrink">*/}
          {/*      <input*/}
          {/*        type="radio"*/}
          {/*        name={name}*/}
          {/*        id="XML"*/}
          {/*        checked={format === 'XML'}*/}
          {/*        className={`w-8 p-0 text-xs ${format === 'XML' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}*/}
          {/*        onChange={() => setFormat('XML')}*/}
          {/*      />*/}
          {/*  <label className="text-xs" htmlFor="XML">XML</label>*/}
          {/*</div>*/}





        </div>
    );
};