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
                    <Link href="/about"><li>ABOUT</li></Link>
                    <li>WORK</li>
                    <li>HIRE US</li>
                    <li>STORE</li>
                </ul>
            </div>
        )
    }
}
