import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:5000/'
})
const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})

const authInterceptor = config => {
    config.header.authorization = `Bearer ${localStorage.getItem('token')}`
}

$authHost.interceptors.request.use(authInterceptor)

export {$host, $authHost}