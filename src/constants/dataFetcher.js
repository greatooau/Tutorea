import axios from "axios"

const baseUrl = "http://:5000/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }