import { WeatherModel, Weather } from "./Model";
import { ActionMessage } from "./Action";
const R = require('ramda');

'use strict';
export function reducer(msg: ActionMessage, model: WeatherModel) {
    console.log(msg);
    switch (msg.type) {
        case 'TEST':
            return {...model, weathers: [...model.weathers, new Weather()]}
            break;
        case 'INPUT_LOCATION':
            const {editedWeather} = model;
            const edited = {...editedWeather, location: msg.payload};
            return {...model, editedWeather: edited};
        case 'ADD_LOCATION':
            const newWeather = new Weather();
            const newLocationWeather = 
                {...newWeather, id: model.nextId, location: msg.payload};
            const initWeather = {...model.editedWeather, location: ''}
            return {...model, 
                weathers: [...model.weathers, newLocationWeather],
                editedWeather: initWeather,
                nextId: model.nextId + 1
            }
        case 'DELETE_LOCATION':
        const deletedWeathers = R.filter(
            (weather: Weather) => weather.id !== msg.payload,
            model.weathers
        );
        return {...model, weathers: deletedWeathers}

        default:
            break;
    }
    
}