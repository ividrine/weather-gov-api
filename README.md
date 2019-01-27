﻿# weather-gov-api

A javascript class wrapping [weather.gov api](https://www.weather.gov/documentation/services-web-api)

## Getting Started

### Install
```
npm install weather-gov-api --save
```
### Add into project
ES6 
```
import weather from 'weather-gov-api'
```
ES5
```
var weather = require('weather-gov-api');
```

## Examples

```
weather.getForecast('default', 40.712776, -74.005974)
    .then(data => { console.log(data)})
    .catch(err => console.log(err))
```

## Documentation
[Wiki](https://github.com/ividrine/weather-gov-api/wiki/Documentation)

## Author

[idvidrine](https://github.com/idvidrine)

See also the list of [contributors](https://github.com/ividrine/weather-gov-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
