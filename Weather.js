let axios = require('axios');
let Weather = () => {
    this.baseUrl = 'https://api.weather.gov';
    this.typeMap = {
        grid: 'forecastGridData',
        hour: 'forecastHourly',
        default: 'forecast'
    }
    let _this = this;
    return {
        fetchLinks: function(lat, long) {
            let url = _this.baseUrl + `/points/${lat},${long}`
            return axios.get(url)
        },
        fetchForecast(data, type) {
            return axios(data.data.properties[_this.typeMap[type]]);
        },
        getForecast(type, lat, long) {
            return new Promise((resolve, reject) => {
                _this.fetchLinks(lat, long)
                .then(data => {return _this.fetchForecast(data, type)})
                .then(data => resolve(data))
                .catch(err => reject(err))
            })
        }
    }
}

module.exports = Weather;