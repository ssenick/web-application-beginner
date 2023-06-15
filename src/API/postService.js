import axios from "axios";


export default class PostService {
   static async getUsers() {
      const response = await axios.get(' https://reqres.in/api/users');
      return response
   }
   static async getRates() {
       const response = await axios.get('https://cors-anywhere.herokuapp.com/currate.ru/api/?get=rates&pairs=USDCAD,USDEUR,USDGBP&key=2565c1d760dfa1975d8a7d39e7628ba0');
      // const response = await axios.get('https://api.exchangerate-api.com/v6/latest/USD');
      return response
   }
}