import React, {Component} from 'react';
import './weatherWidget.css';


class WeatherWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hideWidget: false,
            temp: 0,
            location: {},
            feelsLike: 0,
            weather: "",
            humidity: 0,
            windString: "",
            precip: 0,
            forecast: [],
            isMidDay: false
        };

        this.apiKey = 'a94110a56afb0ea2';
        this.conditionUrl = `http://api.wunderground.com/api/${this.apiKey}/conditions/q/MA/Boston.json`;
        this.forecastUrl = `http://api.wunderground.com/api/${this.apiKey}/forecast10day/q/MA/Boston.json`;
        this.alertUrl = `http://api.wunderground.com/api/${this.apiKey}/alerts/q/MA/Boston.json`;
    }

    componentWillMount() {
    }


    componentDidMount() {
        this.setCurrentWeatherFromWU();
        this.setTenDayForecast();
    }

    setCurrentWeatherFromWU() {
        fetch(this.conditionUrl).then((response) => {
            return response.json();
        }).then((json) => {
            let conditionObj = this._mapCurrentWeather(json);
            this.setState(conditionObj);
        });
    };


    _mapCurrentWeather(json) {
        let conditionObj = {
            feelsLike: json.current_observation.feelslike_f,
            temp: json.current_observation.temp_f,
            humidity: json.current_observation.relative_humidity,
            weather: json.current_observation.weather,
            windString: json.current_observation.wind_string,
            location: json.current_observation.display_location
        }
        return conditionObj;
    }


    setTenDayForecast() {
        fetch(this.forecastUrl).then(response => {
            return response.json();
        }).then(json => {
            let forecastArray = this._mapForecastJson(json);
            this.setState({
                forecast: forecastArray
            })
        })
    }

    _mapForecastJson(json) {
        const simpleForecast = json.forecast.simpleforecast.forecastday;
        // const textForecast = json.forecast.txt_forecast;
        return simpleForecast;

    }

    toggleWidget() {
        this.setState({
            hideWidget: !this.state.hideWidget
        })
    }

    render() {
        const tenDayHtml = this.state.forecast.map(function(forecastUnit, index) {
            console.warn(forecastUnit);
            return (
                <div className="weather-widget__forecast_unit" key={index}>
                    <div>{forecastUnit.high.fahrenheit}</div>
                    <div>{forecastUnit.low.fahrenheit}</div>
                    <div>{forecastUnit.date.weekday}</div>
                    <div>{forecastUnit.date.monthname} {forecastUnit.date.day}, {forecastUnit.date.year}</div>
                    <div>{forecastUnit.conditions}</div>
                </div>
            )
        });

        return (
            <div className={"weather-widget" + (this.state.hideWidget ? " weather-widget--hidden " : "")}>
                <div className="weather-widget__hide-button" onClick={this.toggleWidget.bind(this)}>X</div>
                <div className="weather-widget__current-weather">
                    <div className="weather-widget__info-card">{this.state.temp} degrees</div>
                    <div className="weather-widget__info-card">It is {this.state.weather} outside</div>
                    <div className="weather-widget__info-card">Feels like {this.state.feelsLike} degrees</div>
                    <div className="weather-widget__info-card">humidity is {this.state.humidity}</div>
                </div>

                <div className="weather-widget__ten-day">
                    {tenDayHtml}
                </div>
            </div>
        )
    }
}

export default WeatherWidget;