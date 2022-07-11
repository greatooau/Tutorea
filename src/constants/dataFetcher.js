import axios from "axios"

const baseUrl = "http://192.168.156.49:5000/"//"https://tutorea0greatooau.herokuapp.com/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }