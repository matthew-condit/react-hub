### Conditions API Response ###

```json
{
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "conditions": 1
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "Boston, MA",
      "city": "Boston",
      "state": "MA",
      "state_name": "Massachusetts",
      "country": "US",
      "country_iso3166": "US",
      "zip": "02108",
      "magic": "1",
      "wmo": "99999",
      "latitude": "42.36000061",
      "longitude": "-71.06999969",
      "elevation": "21.9"
    },
    "observation_location": {
      "full": "Cambridge, Charles River, Cambridge, Massachusetts",
      "city": "Cambridge, Charles River, Cambridge",
      "state": "Massachusetts",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "42.363503",
      "longitude": "-71.077904",
      "elevation": "36 ft"
    },
    "estimated": {},
    "station_id": "KMACAMBR70",
    "observation_time": "Last Updated on June 19, 8:48 PM EDT",
    "observation_time_rfc822": "Mon, 19 Jun 2017 20:48:35 -0400",
    "observation_epoch": "1497919715",
    "local_time_rfc822": "Mon, 19 Jun 2017 20:48:49 -0400",
    "local_epoch": "1497919729",
    "local_tz_short": "EDT",
    "local_tz_long": "America/New_York",
    "local_tz_offset": "-0400",
    "weather": "Overcast",
    "temperature_string": "77.9 F (25.5 C)",
    "temp_f": 77.9,
    "temp_c": 25.5,
    "relative_humidity": "88%",
    "wind_string": "From the SW at 2.5 MPH Gusting to 4.9 MPH",
    "wind_dir": "SW",
    "wind_degrees": 234,
    "wind_mph": 2.5,
    "wind_gust_mph": "4.9",
    "wind_kph": 4,
    "wind_gust_kph": "7.9",
    "pressure_mb": "1010",
    "pressure_in": "29.83",
    "pressure_trend": "+",
    "dewpoint_string": "74 F (23 C)",
    "dewpoint_f": 74,
    "dewpoint_c": 23,
    "heat_index_string": "NA",
    "heat_index_f": "NA",
    "heat_index_c": "NA",
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "77.9 F (27 C)",
    "feelslike_f": "77.9",
    "feelslike_c": "27",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "0",
    "UV": "0.0",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "cloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/nt_cloudy.gif",
    "forecast_url": "http://www.wunderground.com/US/MA/Boston.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KMACAMBR70",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=42.363503,-71.077904",
    "nowcast": ""
  }
}
```


### Forecast API ###

```json
{
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "forecast10day": 1
    }
  },
  "forecast": {
    "txt_forecast": {
      "date": "7:11 PM EDT",
      "forecastday": [
        {
          "period": 0,
          "icon": "tstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/tstorms.gif",
          "title": "Monday",
          "fcttext": "Windy, with thunderstorms. Lows overnight in the upper 60s.",
          "fcttext_metric": "Thunderstorms. Low 21C.",
          "pop": "80"
        },
        {
          "period": 1,
          "icon": "nt_tstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_tstorms.gif",
          "title": "Monday Night",
          "fcttext": "Thunderstorms and gusty winds early, then variable clouds overnight with still a chance of showers. Low 69F. Winds SSW at 20 to 30 mph. Chance of rain 80%.",
          "fcttext_metric": "Thunderstorms early, then variable clouds overnight with still a chance of showers. Low 21C. Winds SSW at 25 to 40 km/h. Chance of rain 80%.",
          "pop": "80"
        },
        {
          "period": 2,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Tuesday",
          "fcttext": "Cloudy skies early, followed by partial clearing. High 82F. Winds SW at 15 to 25 mph.",
          "fcttext_metric": "Mostly cloudy early, then afternoon sunshine. High 28C. Winds SW at 25 to 40 km/h.",
          "pop": "20"
        },
        {
          "period": 3,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Tuesday Night",
          "fcttext": "A mostly clear sky. Low around 65F. Winds SW at 10 to 20 mph.",
          "fcttext_metric": "A mostly clear sky. Low 18C. Winds SW at 15 to 30 km/h.",
          "pop": "20"
        },
        {
          "period": 4,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Wednesday",
          "fcttext": "Sunshine and clouds mixed. High near 80F. Winds WSW at 10 to 20 mph.",
          "fcttext_metric": "Sunshine and clouds mixed. High 27C. Winds WSW at 15 to 30 km/h.",
          "pop": "20"
        },
        {
          "period": 5,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Wednesday Night",
          "fcttext": "A stray shower or thunderstorm is possible early. Some clouds early will give way to generally clear conditions overnight. Low 62F. Winds W at 10 to 15 mph.",
          "fcttext_metric": "A stray shower or thunderstorm is possible early. Partly cloudy skies. Low 17C. Winds W at 15 to 25 km/h.",
          "pop": "20"
        },
        {
          "period": 6,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Thursday",
          "fcttext": "Sunshine and some clouds. High 81F. Winds W at 10 to 15 mph.",
          "fcttext_metric": "Except for a few afternoon clouds, mainly sunny. High 28C. Winds W at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 7,
          "icon": "nt_chancerain",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
          "title": "Thursday Night",
          "fcttext": "Partly cloudy skies early will give way to occasional showers later during the night. Low 66F. Winds SSW at 10 to 15 mph. Chance of rain 50%.",
          "fcttext_metric": "Partly cloudy skies early will give way to occasional showers later during the night. Low 19C. Winds SSW at 10 to 15 km/h. Chance of rain 50%.",
          "pop": "50"
        },
        {
          "period": 8,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Friday",
          "fcttext": "Intervals of clouds and sunshine. High 86F. Winds SSW at 15 to 25 mph.",
          "fcttext_metric": "Sunshine and clouds mixed. High around 30C. Winds SSW at 25 to 40 km/h.",
          "pop": "10"
        },
        {
          "period": 9,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Friday Night",
          "fcttext": "Partly cloudy. Low 69F. Winds SW at 10 to 20 mph.",
          "fcttext_metric": "Partly cloudy. Low 21C. Winds SW at 15 to 30 km/h.",
          "pop": "20"
        },
        {
          "period": 10,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Saturday",
          "fcttext": "Abundant sunshine. High 83F. Winds W at 10 to 20 mph.",
          "fcttext_metric": "Mainly sunny. High 28C. Winds W at 15 to 30 km/h.",
          "pop": "10"
        },
        {
          "period": 11,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Saturday Night",
          "fcttext": "A few clouds from time to time. Low near 65F. Winds W at 5 to 10 mph.",
          "fcttext_metric": "A mostly clear sky. Low 18C. Winds W at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 12,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "A few clouds from time to time. High 78F. N winds shifting to ESE at 10 to 15 mph.",
          "fcttext_metric": "Mostly sunny skies. High near 25C. N winds shifting to ESE at 15 to 25 km/h.",
          "pop": "10"
        },
        {
          "period": 13,
          "icon": "nt_chancerain",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_chancerain.gif",
          "title": "Sunday Night",
          "fcttext": "Mostly clear skies early will give way to occasional showers later during the night. Low 63F. Winds SSW at 5 to 10 mph. Chance of rain 60%.",
          "fcttext_metric": "Partly cloudy skies early will give way to occasional showers later during the night. Low 17C. Winds SSW at 10 to 15 km/h. Chance of rain 60%.",
          "pop": "60"
        },
        {
          "period": 14,
          "icon": "chancerain",
          "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
          "title": "Monday",
          "fcttext": "Rain showers early with some sunshine later in the day. High around 75F. Winds W at 10 to 20 mph. Chance of rain 60%.",
          "fcttext_metric": "Rain showers early with some sunshine later in the day. High 24C. Winds W at 15 to 30 km/h. Chance of rain 60%.",
          "pop": "60"
        },
        {
          "period": 15,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Monday Night",
          "fcttext": "Generally fair. Low 57F. Winds WNW at 10 to 15 mph.",
          "fcttext_metric": "Generally fair. Low 14C. Winds WNW at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 16,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Tuesday",
          "fcttext": "Partly cloudy skies. High 71F. NNW winds shifting to E at 10 to 15 mph.",
          "fcttext_metric": "Partly cloudy. High 22C. NNW winds shifting to E at 15 to 25 km/h.",
          "pop": "10"
        },
        {
          "period": 17,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Tuesday Night",
          "fcttext": "A mostly clear sky. Low 59F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "A mostly clear sky. Low around 15C. Winds SSW at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 18,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Wednesday",
          "fcttext": "Sunny. High 72F. Winds SW at 10 to 20 mph.",
          "fcttext_metric": "Sunny skies. High 22C. Winds SSW at 15 to 25 km/h.",
          "pop": "0"
        },
        {
          "period": 19,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Wednesday Night",
          "fcttext": "Clear skies. Low around 60F. Winds SW at 10 to 15 mph.",
          "fcttext_metric": "Clear skies. Low 16C. Winds SW at 15 to 25 km/h.",
          "pop": "10"
        }
      ]
    },
    "simpleforecast": {
      "forecastday": [
        {
          "date": {
            "epoch": "1497913200",
            "pretty": "7:00 PM EDT on June 19, 2017",
            "day": 19,
            "month": 6,
            "year": 2017,
            "yday": 169,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 1,
          "high": {
            "fahrenheit": "87",
            "celsius": "30"
          },
          "low": {
            "fahrenheit": "69",
            "celsius": "21"
          },
          "conditions": "Thunderstorm",
          "icon": "tstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/tstorms.gif",
          "skyicon": "",
          "pop": 80,
          "qpf_allday": {
            "in": 0.32,
            "mm": 8
          },
          "qpf_day": {
            "in": null,
            "mm": null
          },
          "qpf_night": {
            "in": 0.32,
            "mm": 8
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": null,
            "cm": null
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 28,
            "kph": 44,
            "dir": "",
            "degrees": 0
          },
          "avewind": {
            "mph": 5,
            "kph": 8,
            "dir": "South",
            "degrees": 191
          },
          "avehumidity": 85,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1497999600",
            "pretty": "7:00 PM EDT on June 20, 2017",
            "day": 20,
            "month": 6,
            "year": 2017,
            "yday": 170,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 2,
          "high": {
            "fahrenheit": "82",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "65",
            "celsius": "18"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 25,
            "kph": 40,
            "dir": "SW",
            "degrees": 224
          },
          "avewind": {
            "mph": 18,
            "kph": 29,
            "dir": "SW",
            "degrees": 224
          },
          "avehumidity": 64,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498086000",
            "pretty": "7:00 PM EDT on June 21, 2017",
            "day": 21,
            "month": 6,
            "year": 2017,
            "yday": 171,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 3,
          "high": {
            "fahrenheit": "80",
            "celsius": "27"
          },
          "low": {
            "fahrenheit": "62",
            "celsius": "17"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "WSW",
            "degrees": 244
          },
          "avewind": {
            "mph": 16,
            "kph": 26,
            "dir": "WSW",
            "degrees": 244
          },
          "avehumidity": 53,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498172400",
            "pretty": "7:00 PM EDT on June 22, 2017",
            "day": 22,
            "month": 6,
            "year": 2017,
            "yday": 172,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 4,
          "high": {
            "fahrenheit": "81",
            "celsius": "27"
          },
          "low": {
            "fahrenheit": "66",
            "celsius": "19"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0.09,
            "mm": 2
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.09,
            "mm": 2
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "W",
            "degrees": 272
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "W",
            "degrees": 272
          },
          "avehumidity": 47,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498258800",
            "pretty": "7:00 PM EDT on June 23, 2017",
            "day": 23,
            "month": 6,
            "year": 2017,
            "yday": 173,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 5,
          "high": {
            "fahrenheit": "86",
            "celsius": "30"
          },
          "low": {
            "fahrenheit": "69",
            "celsius": "21"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 25,
            "kph": 40,
            "dir": "SSW",
            "degrees": 203
          },
          "avewind": {
            "mph": 18,
            "kph": 29,
            "dir": "SSW",
            "degrees": 203
          },
          "avehumidity": 62,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498345200",
            "pretty": "7:00 PM EDT on June 24, 2017",
            "day": 24,
            "month": 6,
            "year": 2017,
            "yday": 174,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 6,
          "high": {
            "fahrenheit": "83",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "65",
            "celsius": "18"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "W",
            "degrees": 268
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "W",
            "degrees": 268
          },
          "avehumidity": 58,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498431600",
            "pretty": "7:00 PM EDT on June 25, 2017",
            "day": 25,
            "month": 6,
            "year": 2017,
            "yday": 175,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 7,
          "high": {
            "fahrenheit": "78",
            "celsius": "26"
          },
          "low": {
            "fahrenheit": "63",
            "celsius": "17"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0.06,
            "mm": 2
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0.06,
            "mm": 2
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "ENE",
            "degrees": 69
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "ENE",
            "degrees": 69
          },
          "avehumidity": 61,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498518000",
            "pretty": "7:00 PM EDT on June 26, 2017",
            "day": 26,
            "month": 6,
            "year": 2017,
            "yday": 176,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 8,
          "high": {
            "fahrenheit": "75",
            "celsius": "24"
          },
          "low": {
            "fahrenheit": "57",
            "celsius": "14"
          },
          "conditions": "Chance of Rain",
          "icon": "chancerain",
          "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
          "skyicon": "",
          "pop": 60,
          "qpf_allday": {
            "in": 0.08,
            "mm": 2
          },
          "qpf_day": {
            "in": 0.08,
            "mm": 2
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "W",
            "degrees": 269
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "W",
            "degrees": 269
          },
          "avehumidity": 56,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498604400",
            "pretty": "7:00 PM EDT on June 27, 2017",
            "day": 27,
            "month": 6,
            "year": 2017,
            "yday": 177,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 9,
          "high": {
            "fahrenheit": "71",
            "celsius": "22"
          },
          "low": {
            "fahrenheit": "59",
            "celsius": "15"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 10,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NE",
            "degrees": 38
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NE",
            "degrees": 38
          },
          "avehumidity": 51,
          "maxhumidity": 0,
          "minhumidity": 0
        },
        {
          "date": {
            "epoch": "1498690800",
            "pretty": "7:00 PM EDT on June 28, 2017",
            "day": 28,
            "month": 6,
            "year": 2017,
            "yday": 178,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "EDT",
            "tz_long": "America/New_York"
          },
          "period": 10,
          "high": {
            "fahrenheit": "72",
            "celsius": "22"
          },
          "low": {
            "fahrenheit": "60",
            "celsius": "16"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 20,
            "kph": 32,
            "dir": "SW",
            "degrees": 215
          },
          "avewind": {
            "mph": 13,
            "kph": 21,
            "dir": "SW",
            "degrees": 215
          },
          "avehumidity": 57,
          "maxhumidity": 0,
          "minhumidity": 0
        }
      ]
    }
  }
}
```

```json
{
  "date": {
    "epoch": "1498690800",
    "pretty": "7:00 PM EDT on June 28, 2017",
    "day": 28,
    "month": 6,
    "year": 2017,
    "yday": 178,
    "hour": 19,
    "min": "00",
    "sec": 0,
    "isdst": "1",
    "monthname": "June",
    "monthname_short": "Jun",
    "weekday_short": "Wed",
    "weekday": "Wednesday",
    "ampm": "PM",
    "tz_short": "EDT",
    "tz_long": "America/New_York"
  },
  "period": 10,
  "high": {
    "fahrenheit": "72",
    "celsius": "22"
  },
  "low": {
    "fahrenheit": "60",
    "celsius": "16"
  },
  "conditions": "Clear",
  "icon": "clear",
  "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
  "skyicon": "",
  "pop": 10,
  "qpf_allday": {
    "in": 0,
    "mm": 0
  },
  "qpf_day": {
    "in": 0,
    "mm": 0
  },
  "qpf_night": {
    "in": 0,
    "mm": 0
  },
  "snow_allday": {
    "in": 0,
    "cm": 0
  },
  "snow_day": {
    "in": 0,
    "cm": 0
  },
  "snow_night": {
    "in": 0,
    "cm": 0
  },
  "maxwind": {
    "mph": 15,
    "kph": 24,
    "dir": "SSW",
    "degrees": 210
  },
  "avewind": {
    "mph": 12,
    "kph": 19,
    "dir": "SSW",
    "degrees": 210
  },
  "avehumidity": 57,
  "maxhumidity": 0,
  "minhumidity": 0
}```