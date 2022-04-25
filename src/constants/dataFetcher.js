import axios from "axios"

const baseUrl = "http://192.168.214.213:5000/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }