import axios, { AxiosInstance } from "axios"

const BASE_API_URL = 'https://my-json-server.typicode.com/rezamazaheri/real-world-vue'

export default ( headers = {} ): AxiosInstance => {
    return axios.create({
        baseURL: BASE_API_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers
        }
    })
}
