import Axios from "axios";

const urlApi = "http://gateway.marvel.com/v1/public";


const api = Axios.create({
    baseURL: urlApi,
})

export default api