import axios from "axios"

const baseUrl = "http://192.168.191.165:5000/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }