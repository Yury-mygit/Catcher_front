import React, {useEffect, useState} from 'react';
import { js2xml } from 'xml-js';
import axios from 'axios';


import RequestUnit from "./RequestUnit";

  import data from '../../data_format.json';


const Automation = () => {

    const [pack, setPack] = useState(data)

    const sendDataToServer = async () => {
    try {
      const response = await axios.put('http://api.sphere.com:801/storage/request', pack);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    };

    const fetchDataFromServer = async () => {
    try {
      const response = await axios.get('http://api.sphere.com:801/storage/request');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };






  return (
  <div>
     {pack.units.map((unitData, index) => (
        <RequestUnit key={index} data={unitData} />
      ))}
  </div>
  );
}

export default Automation;
