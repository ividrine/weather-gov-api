let axios = require('axios');
function Weather() {
    this.baseUrl = 'https://api.weather.gov';
    this.typeMap = {
        grid: 'forecastGridData',
        hour: 'forecastHourly',
        default: 'forecast'
    }
}

Weather.prototype.fetchLinks = function(lat, long) {
    let url = this.baseUrl + `/points/${lat},${long}`
    return axios.get(url)
}

Weather.prototype.fetchForecast = function(data, type) {
    return axios(data.data.properties[this.typeMap[type]]);
}

Weather.prototype.getForecast = function(type, lat, long) {
    let _this = this;
    return new Promise((resolve, reject) => {
        _this.fetchLinks(lat, long)
        .then(data => {return _this.fetchForecast(data, type)})
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
}

module.exports = Weather;