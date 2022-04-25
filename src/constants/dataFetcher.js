import axios from "axios"

const baseUrl = "http://192.168.121.104:5000/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }