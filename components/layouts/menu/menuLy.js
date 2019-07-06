import React from 'react'
import Link from 'next/link'

const menuLy = props => {
    return (
        <ul>
            <li onClick={props.closeMenu} className="closemenu" style={{cursor:'pointer'}}><img src="../static/image/Icon/Close-Menu.png" width="50px" height="50px" alt="icon-close"/></li>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/work">WORK</Link></li>
            <li><a onClick={props.showModal}>HIRE US</a></li>
            <li><a href="https://dignitestore.herokuapp.com/" target="_blank" rel="noopener">STORE</a></li>
        </ul>
    )
}

export default menuLy
