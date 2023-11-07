// Validator.ts

class Validator {
  static isJson(str: string) {
    try {
      return JSON.parse(str);
    } catch (e) {
      return false;
    }
  }

  static isXML(str: string) {
    const parser = new DOMParser().parseFromString(str, 'text/xml');
    return parser.getElementsByTagName('parsererror').length <= 0;
  }

  static isFormData(str: string) {
    // Add your form data validation logic here
    return /^[^=&\n]+={1}[^=&\n]+$/.test(str);
  }

  static isPHPArray(str: string) {
    // Add your PHP array validation logic here
    return str.startsWith("'") && str.endsWith("',");
  }

  static validate(data: string){
    let  temp = this.isJson(data)
    if (temp!=false) return {'status': 'ok', 'data': temp}
    else return false
  }

}

export default Validator;
