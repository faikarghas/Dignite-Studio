import * as actionTypes from './actionType';
import {setCookie,getCookie} from '../lib/cookie'


export const switchThemeHandler = (bs,theme,colour,button_colour) => {
  return dispatch => {
    dispatch({type:actionTypes.BUTTON_CHECKED,button_switch: bs,theme:theme,colour:colour,button_colour:button_colour});
    document.documentElement.setAttribute("data-theme", theme);
    setCookie('theme',theme)
  }
}

export const initilizeThemeHandler =  (bs,theme,colour) => {
  return dispatch => {
    let cookieTheme = getCookie('theme')
    if (cookieTheme === 'dark') {
      dispatch({type:actionTypes.INIT_THEME,button_switch: true,theme:'dark',colour:'rgb(255,255,255,1)',button_colour:'rgb(34,34,34,1)'});
      document.documentElement.setAttribute("data-theme", 'dark');
      setCookie('theme','dark')
    } else {
      dispatch({type:actionTypes.INIT_THEME,button_switch: false,theme:'light',colour:'rgb(34,34,34,1)',button_colour:'rgb(255,255,255,1)'});
      document.documentElement.setAttribute("data-theme", 'light');
      setCookie('theme','light')
    }
  }
}
