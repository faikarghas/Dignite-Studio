import Link from 'next/link'
import PropTypes from 'prop-types';
import { Container,Row,Col } from 'react-bootstrap';
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Menu from '../menu'

import * as action from '../../../redux/actionIndex'
import {connect} from 'react-redux'
import useTranslation from '../../../hooks/useTranslation'


const variants = {
    initial: {left:"-110%"},
    enter: { left:"0%", transition: { duration: 0.5} },
    exit: { left:"-110%",transition: { duration: 0.5,delay: 0.5} },
    logo: {opacity:1},
    logo1: {opacity:1}
};


const headerLy = props => {
    const { locale, t } = useTranslation()
    const [ anim , setAnim ] = useState(false)

    function addOverflowHide(params) {
        setAnim(!anim)
        if (!anim) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }
    return (
        <React.Fragment>
            <header id="top" >
                <div className="hd_bg" ref={props.headerRef}></div>
                <Container className="header_menu">
                    <ul>
                        <li style={{cursor:'pointer'}}>
                            <Link href="/" >
                                <motion.img
                                animate={anim ? 'logo' : 'logo1'}
                                exit="exit"
                                variants={variants}
                                src={anim ? 'https://image-dignite.s3-ap-southeast-1.amazonaws.com/logo-dignitestudio-white.png':'https://image-dignite.s3-ap-southeast-1.amazonaws.com/logo-dignitestudio-yellow.png'} width="120px" height="100%" style={{objectFit:'contain'}} alt="logo-dignite" ></motion.img>
                            </Link>
                        </li>

                        <li className="menu-button" onClick={addOverflowHide}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                width="40px" height="50px" viewBox="0 0 612 612" style={{enablebackground:'new 0 0 612 612'}} xmlSpace="preserve">
                            <g>
                                <g className="stroke">
                                    <path  d="M16.051,180.818h579.898c8.874,0,16.051-6.176,16.051-13.909c0-7.678-7.288-13.909-16.051-13.909H16.051
                                        C7.177,153,0,159.176,0,166.909C0,174.587,7.288,180.818,16.051,180.818z" style={{fill:props.colour}}/>
                                    <path  d="M16.051,319.909h579.898c8.874,0,16.051-6.176,16.051-13.909c0-7.678-7.288-13.909-16.051-13.909H16.051
                                        C7.177,292.091,0,298.267,0,306C0,313.678,7.288,319.909,16.051,319.909z" style={{fill:props.colour}}/>
                                    <path  d="M16.051,459h579.898c8.874,0,16.051-6.176,16.051-13.909c0-7.678-7.288-13.909-16.051-13.909H16.051
                                        C7.177,431.182,0,437.357,0,445.091C0,452.769,7.288,459,16.051,459z" style={{fill:props.colour}}/>
                                </g>
                            </g>
                            </svg>
                        </li>
                    </ul>
                </Container>
            </header>
            <motion.div
            key="menu"
            initial={false}
            animate={anim ? 'enter' : 'exit'}
            variants={variants}
            exit="exit"
            style={{
                backgroundColor: "#ffba00",
                textAlign: "center",
                position: "fixed",
                width: "100%",
                height: '100%',
                zIndex: "2",
                top:'0'
            }}
            >
                <Menu/>
            </motion.div>
        </React.Fragment>
    )
}

headerLy.propTypes = {
    headerRef : PropTypes.func,
    menu: PropTypes.bool,
    openMenu: PropTypes.func,
    closeMenu: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        colour: state.theme.theme_colour
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // switchThemeHandler : (bs,theme,colour,button_colour) => dispatch(action.switchThemeHandler(bs,theme,colour,button_colour))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(headerLy)
