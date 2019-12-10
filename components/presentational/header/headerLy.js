import Link from 'next/link'
import PropTypes from 'prop-types';
import { Container,Row,Col } from 'react-bootstrap';
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Menu from '../menu'

// import * as action from '../../../redux/actionIndex'
// import {connect} from 'react-redux'
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

    console.log(anim);
    
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
                            <button className="nav">
                                <motion.span exit={{opacity:0}}  animate={anim ? {width:'80%',transition:{duration:0}} :{width:'100%',transition:{duration:0}}}></motion.span>
                                <motion.span exit={{opacity:0}}  animate={anim ? {width:'100%',transition:{duration:0}} :{width:'80%',transition:{duration:0}}}></motion.span>
                            </button>
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

// const mapStateToProps = (state) => {
//     return {
//         colour: state.theme.theme_colour
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         // switchThemeHandler : (bs,theme,colour,button_colour) => dispatch(action.switchThemeHandler(bs,theme,colour,button_colour))
//     }
// }


export default headerLy
