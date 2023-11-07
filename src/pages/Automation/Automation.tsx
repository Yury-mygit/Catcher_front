import React, {useState} from 'react';
import RequestUnit from "./RequestUnit";

const Automation = () => {

   let aa = {
   "firstName": "Иван",
   "lastName": "Иванов",
   "address": {
       "streetAddress": "Московское ш., 101, кв.101",
       "city": "Ленинград",
       "postalCode": 101101
   },
   "phoneNumbers": [
       "812 123-1234",
       "916 123-4567"
   ]
}

  let a = aa

  const [unitsData, setUnitsData] = useState([
    {'id': 0, 'type':'RequestUnit', 'url':'http://test.com', 'body': a},
    {'id': 1, 'type':'RequestUnit', 'url':'http://test.com', 'body': a}
  ])

  return (
  <div>
     {unitsData.map((unitData, index) => (
        <RequestUnit key={index} data={unitData} />
      ))}
  </div>
  );
}

export default Automation;
