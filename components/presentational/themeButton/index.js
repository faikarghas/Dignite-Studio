import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import * as action from '../../../redux/actionIndex'

const ThemeButton = props => {
    const [checkedItems, setCheckedItems] = useState(false);

    const handleChange = event => {
        setCheckedItems(event.target.checked);
        const themeData = !checkedItems ? {theme:'dark',colour:'rgb(255,255,255,1)',button_colour:'rgb(34,34,34,1)'} : {theme:'light',colour:'rgb(34,34,34,1)',button_colour:'rgb(255,255,255,1)'};
        props.switchThemeHandler(event.target.checked,themeData.theme,themeData.colour,themeData.button_colour)
    };

    useEffect(() => {
        if (props.theme === 'dark') {
            setCheckedItems(true);
        } else {
            setCheckedItems(false);
        }

    });
    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
            <input name="switch" type="checkbox" id="checkbox" checked={checkedItems} onChange={handleChange}/>
            <div className="slider round"></div>
            </label>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      theme: state.theme.theme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        switchThemeHandler : (bs,theme,colour,button_colour) => dispatch(action.switchThemeHandler(bs,theme,colour,button_colour))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(ThemeButton)
