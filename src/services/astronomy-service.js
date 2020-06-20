import axios from "axios";

export default class AstronomyService {
    _apiBase = 'https://api.nasa.gov/planetary/apod?';
    _apiKey = '&api_key=1Y7KbQaKepAKKDALm5fRa1FX69qfZJ50ddAXqtv3';

    getAstronomy = (day) => {
        const data = axios.get(`${this._apiBase}date=${day}${this._apiKey}`);
        return new Promise(resolve => {
            resolve(data);
        });
    };

    getAstronomyList = (startDate, endDate) => {
        const data = axios.get(`${this._apiBase}start_date=${startDate}&end_date=${endDate}${this._apiKey}`);
        return new Promise(resolve => resolve(data));
    };
};