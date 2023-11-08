import React, {useState} from 'react';
import { js2xml } from 'xml-js';

import RequestUnit from "./RequestUnit";

const Automation = () => {

   let fake = {
   expand : "attributes",
   link : {
      "rel" : "self",
      "href" : "http://localhost:8095/crowd/rest/usermanagement/1/user?username=my_username"
       },
       "name" : "my_username",
       "first-name" : "My",
       "last-name" : "Username",
       "display-name" : "My Username",
       "email" : "user@example.test",
       "password" : {
          "link" : {
             "rel" : "edit",
             "href" : "http://localhost:8095/crowd/rest/usermanagement/1/user/password?username=my_username"
          }
       },
       "active" : true,
       "attributes" : {
          "link" : {
             "rel" : "self",
             "href" : "http://localhost:8095/crowd/rest/usermanagement/1/user/attribute?username=my_username"
          },
          "attributes" : []
       }
    }


  const [unitsData, setUnitsData] = useState([
  {
    'id': 0,
    'type':'RequestUnit',
    'url':'http://localhost:800/fake-users/5',
    'body': '',
    'title': "Title of component",
    'method': 'POST',
    'params': '',
    'headers': '',
    'authorization': '',
    'text': JSON.stringify(fake, null, 2),
    'response': null,
    'isValid': true,
    'format': 'JSON',
    'dataType': 'Data is valid'
  },
  {
    'id': 1,
    'type':'RequestUnit',
    'url':'http://localhost:800/fake-users/5',
    'body': fake,
    'title': "Title of component",
    'method': 'POST',
    'params': '',
    'headers': '',
    'authorization': '',
    'text': '',
    'response': null,
    'isValid': false,
    'format': 'JSON',
    'dataType': 'Data is not valid'
  }
])
 //
//   const options = { compact: true, ignoreComment: true, spaces: 4 };
//  const xml = js2xml(fake, options);
//
//
// console.log(xml);


  return (
  <div>
     {unitsData.map((unitData, index) => (
        <RequestUnit key={index} data={unitData} />
      ))}
  </div>
  );
}

export default Automation;
