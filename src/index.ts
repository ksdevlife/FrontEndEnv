import { WeatherModel } from "./Model";
import { app } from './App';
import { view } from './View';
import { reducer } from './Reducer';

// document.write("<div id='app'></div>");

let node = document.getElementById('app');
let initModel = new WeatherModel();
app(initModel, view, reducer, node);