import Axios from 'axios';

// Axios.defaults.baseURL = "http://localhost:8000/";
Axios.defaults.baseURL = "https://api.macandgray.com/";
// Axios.defaults.baseURL = "https://api.macandgray.com/";
	

export const axiosInstance = Axios.create({});