import axios from "axios";

const API_TOKEN = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: API_TOKEN,
     } 
});