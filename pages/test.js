import React, { Component } from 'react'
import { Tween, Timeline } from 'react-gsap';

import '../sass/main.scss'

export default class test extends Component {

    state= {
        play:'stop'
    }

    startGsap = () => {

        if(this.state.play === 'play'){
            this.setState({
                play:'reverse'
            })
        } else {
            this.setState({
                play:'play'
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <p>GSAP ANIMATION</p>
                    <button onClick={this.startGsap}>WUIHH</button>
                </div>
                <Tween
                    to={{ css: { scaleY: 1 }, ease: Circ.easeOut}}
                    playState={this.state.play}
                    duration={1.5}
                >
                    <div className="panel">
                        <Tween
                            to={{y:'0px',opacity: 1 , delay: 1}}
                            playState={this.state.play}
                            duration={1}
                        >
                            <h1>HALO DIGNITE</h1>
                        </Tween>
                    </div>
                </Tween>
            </div>
        )
    }
}
