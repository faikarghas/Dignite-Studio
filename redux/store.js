// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
import * as actionTypes from './actionType';
import {updateObject} from '../lib/updateObject'


const InitialState = {
    button_switch : false,
    theme:'light',
    theme_colour: 'rgb(34,34,34,1)',
    button_menu_colour : 'rgb(255,255,255,1)'
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.BUTTON_CHECKED:
            return updateObject(state,{button_switch: action.button_switch,theme:action.theme,theme_colour:action.colour,button_menu_colour:action.button_colour});
        case actionTypes.INIT_THEME:
            return updateObject(state,{button_switch: action.button_switch,theme:action.theme,theme_colour:action.colour,button_menu_colour:action.button_colour});
        default:
            return state
    }
}

// export const initializeStore = (initialState = InitialState) => {
//     return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
// }

