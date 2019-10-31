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

export const openMenuHandler = (data) => {
  return dispatch => {
    dispatch({type:actionTypes.OPEN_MENU});
    const GSAP = require('gsap');
    const { TweenMax, Power4 } = GSAP;


    TweenMax.to(data.svg1,.2, {fill: data.color})
    TweenMax.to(data.svg2,.2, {fill: data.color})
    TweenMax.to(data.svg3,.2, {fill: data.color})


    // menu box
    TweenMax.to(data.navbar, .4, { right: 0, opacity:1, ease:Power4.easeInOut });
    TweenMax.to(data.hEl, .4, { right: 0, opacity:1, ease:Power4.easeInOut });

    TweenMax.staggerFrom(data.usersRef, 1, { opacity: 0}, .1);
    TweenMax.staggerTo(data.usersRef, 1, { opacity: 1, ease:Power4.easeInOut }, .1);
  }
}

export const closeMenuHandler = (data) => {
  return dispatch => {
    dispatch({type:actionTypes.CLOSE_MENU});
    const GSAP = require('gsap');
    const { TweenMax, Power4 } = GSAP;


    TweenMax.staggerFrom(data.usersRef, 1, { opacity: 1}, 0.1);
    TweenMax.staggerTo(data.usersRef, 1, { opacity: 0,ease:Power4.easeInOut }, 0.1,allDone);

    // menu icon
    TweenMax.to(data.svg1,.2, {fill: data.color,delay:1})
    TweenMax.to(data.svg2,.2, {fill: data.color,delay:1})
    TweenMax.to(data.svg3,.2, {fill: data.color,delay:1})

    function allDone(){
      TweenMax.to(data.navbar, .8, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
      TweenMax.to(data.hEl, .8, { right: '100%',ease:Power4.easeInOut ,onComplete:done2});
    }

    function done2() {
      TweenMax.to(data.navbar, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
      TweenMax.to(data.hEl, 0, {css:{opacity:0,right:'-100%'},ease:Power4.easeInOut});
    }
  }
}
