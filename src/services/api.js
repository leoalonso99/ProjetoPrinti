import Axios from "axios";

const url = ''
// colocar a url dentro das '' 

const api = Axios.create({
    baseURL: url,
})

export default api