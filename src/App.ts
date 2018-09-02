
'use strict';
import { WeatherModel } from './Model';
import { ActionMessage } from './Action';

const createElement = require('virtual-dom/create-element');
const diff = require('virtual-dom/diff');
const patch = require('virtual-dom/patch');

export function app(initModel:WeatherModel, 
    view: Function, reducer: Function, node: any) {
        let model = initModel;
        let currentView = view(dispatch, model);
        let rootNode = createElement(currentView);
        node.appendChild(rootNode);
        function dispatch(msg: ActionMessage) {
            model = reducer(msg, model);
            const updatedView = view(dispatch, model);
            const patches = diff(currentView, updatedView);
            rootNode = patch(rootNode, patches);
            currentView = updatedView;
        }
}