import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:8080/Easy_Car_Rent_System_war/'
})
export default instance;