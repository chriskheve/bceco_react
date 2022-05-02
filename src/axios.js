import axios from "axios";
// 
const instance = axios.create({
    // baseURL: 'http://192.168.30.237:900/emergence/proxi-lab'
    baseURL: 'http://127.0.0.1:5000'
    //  baseURL: 'http://192.168.30.149:900/emergence/proxi-lab'
    // baseURL: 'https://dash.proxilab.org/emergence/proxi-lab'
    // baseURL: 'http://devswag.proxilab.org/emergence/proxi-lab'
    // admin.proxilab.org
    // baseURL: 'http://spring.proxilab.local/emergence/proxi-lab'
})

export default instance