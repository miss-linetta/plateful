import axios from "axios";

const instance = axios.create({
    baseURL: `https://www.themealdb.com/api/json`,
});

export default instance;