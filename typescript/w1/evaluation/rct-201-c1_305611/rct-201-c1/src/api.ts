import axios,{ AxiosResponse } from "axios";
import { CountryType, LoginType } from "./Pages/Countries";

// make a successful login request to the reqres.in API
export const loginAPI = async(data:LoginType) => {
   let response:AxiosResponse<LoginType>=await axios.post(`https://reqres.in/api/login`,data)
   return response.data
};

// make a request to get the list of countries from the db.json file, using JSON server
export const getCountriesAPI = async() => {
   let response:AxiosResponse<CountryType[]>=await axios.get(`http://localhost:8080/countries`)
   return response.data
};

//make a request to add a country to the db.json file, using JSON server
export const addCountryDetailsAPI = async(data:CountryType) => {
    let response:AxiosResponse<CountryType>=await axios.post(`http://localhost:8080/countries`,data)
   return response.data
};
