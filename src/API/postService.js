import axios from "axios";


export default class PostService {
   static async getUsers() {
      const response = await axios.get(' https://reqres.in/api/users');
      return response
   }
}