import axios from "axios"

const baseUrl = "http://192.168.91.64:5000/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }