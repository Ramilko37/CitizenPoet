  export default class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
    }
  
  
   
  // Загрузка стихов сервера

  getPoems() {
    return fetch('http://www.buymebuyme.xyz/', {
        method: 'GET'
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data); 
    })
    .catch((res) => {
        return Promise.reject(`Alert: ${res.status} - ${res.statusText}`);
    })
}
}  

