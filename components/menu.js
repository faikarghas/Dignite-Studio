import React, { Component } from 'react'
import Link from 'next/link'

export default class menu extends Component {
    closeMenu = () => {
        console.log('close');
    }
    render() {
        return (
            <div className="menu">
                <ul>
                    <li onClick={this.closeMenu} class="closemenu">X</li>
                    <li>HOME</li>
                    <li><Link href="/about">ABOUT</Link></li>
                    <li>WORK</li>
                    <li>HIRE US</li>
                    <li>STORE</li>
                </ul>
            </div>
        )
    }
}
