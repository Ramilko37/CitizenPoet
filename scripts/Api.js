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
        console.log(res)
        return res.json();
    })
    .catch((err) => {
        return console.log(err);
    })
}
}  

