import { WeatherModel, Weather } from "./Model";
import { testMsg, inputLocationMsg, addlocationMsg, deletelocationMsg } from "./Action";
import 'tachyons';
import '@fortawesome/fontawesome-free';
const R = require('ramda');

'use strict';
const hh = require('hyperscript-helpers');
const h = require('virtual-dom/h');

const {div, pre, h1, input, label, dl, dd, i} = hh(h);

export function view(dispatch:Function, model: WeatherModel) {
    return div({className: 'mw6 center'}, [
        h1({className: 'bb'},'Weather'),
        label({className: 'b'}, 'Location'),
        createForm(dispatch, model.editedWeather.location),
        createTable(dispatch, model.weathers),
    //     button({className: 'pa2',
    // onclick: () => dispatch(testMsg('test'))}, 'Button'),
        pre(JSON.stringify(model, null, 2)),
    ]);
}

function createForm(dispatch:Function, location: string) {
    return div({}, 
        [
            input(
                {type:'text',
                oninput: (e: any) => dispatch(inputLocationMsg(e.target.value)),
                value: location}),
            input(
                {type:'submit', 
                onclick: () => dispatch(addlocationMsg(location)),
                value: 'Add'}),
        ]);
}

function createTable(dispatch:Function, weathers: Weather[]) {
    if (weathers.length === 0) {
        return div({}, "No location is not added.")
    } else {
        return div({}, [
            R.map( R.partial(createRow, [dispatch]), weathers)
        ]);
    }
}

function createRow(dispatch: Function, weather:Weather) {
    return div({className: 'm10 p10 bb flex justify-between'}, [
        dl({className: 'dib'}, [
            dd({className: 'f7'}, 'Location'),
            dd({className: 'f4'}, weather.location)
        ]),
        dl({className: 'dib'}, [
            dd({className: 'f7'}, 'Temp'),
            dd({className: 'f4'}, weather.temp)
        ]),
        dl({className: 'dib'}, [
            dd({className: 'f7'}, 'Low'),
            dd({className: 'f4'}, weather.tempMin)
        ]),
        dl({className: 'dib'}, [
            dd({className: 'f7'}, 'Hight'),
            dd({className: 'f4'}, weather.tempMax)
        ]),
        i({
            className: 'fr fas fa-times gray pointer',
            onclick: (e:any) => dispatch(deletelocationMsg(weather.id))
        }),
    ])
}