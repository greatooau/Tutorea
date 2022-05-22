import axios from "axios"

const baseUrl = "https://tutorea0greatooau.herokuapp.com/"
const dataFetcher = axios.create({baseURL:baseUrl})
export { dataFetcher }