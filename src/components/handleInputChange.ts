// handleInputChange.ts

import Validator from '../validators/validator';

const handleInputChange = (
    data: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
    setIsValid: React.Dispatch<React.SetStateAction<boolean>>,
    setDataType: React.Dispatch<React.SetStateAction<string>>
) => {

  setText(data);

  if(Validator.isJson(data)){
    setIsValid(true);
    setDataType('JSON')
  }
  else if(Validator.isXML(data)){
    setIsValid(true);
    setDataType('XML')
  }
  else if(Validator.isFormData(data)){
    setIsValid(true);
    setDataType('FORM DATA')
  }
  else if(Validator.isPHPArray(data)){
    setIsValid(true);
    setDataType('PHP Array')
    // Convert the PHP array to a Python dictionary here
  } else {
    setIsValid(false);
  }
};

export default handleInputChange;


