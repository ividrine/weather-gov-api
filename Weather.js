import axios from 'axios';
class Weather {
    constructor() {
        this.baseUrl = 'https://api.weather.gov';
        this.typeMap = {
            grid: 'forecastGridData',
            hour: 'forecastHourly',
            default: 'forecast'
        }
    }
    fetchLinks(lat, long) {
        let url = this.baseUrl + `/points/${lat},${long}`
        return axios.get(url)
    }
    fetchForecast(data, type) {
        return axios(data.data.properties[this.typeMap[type]]);
    }
    getForecast(type, lat, long) {
        return new Promise((resolve, reject) => {
            this.fetchLinks(lat, long)
            .then(data => {return this.fetchForecast(data, type)})
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
}

export default Weather;