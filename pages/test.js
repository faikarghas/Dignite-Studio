import React, { Component } from 'react'
import { Tween, Timeline } from 'react-gsap';

import '../sass/main.scss'

export default class test extends Component {

    constructor(props){
        super(props)
        this.state= {
            play:'stop',
            left:0,
            top:0,
        }
    }

    componentDidMount () {
        // let elHeight = document.getElementsByClassName('panel')[0].clientHeight
        // let elWidth = document.getElementsByClassName('panel')[0].clientWidth
        // console.log(elHeight);
        // console.log(elWidth);
        this.setLeftAndRight()
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

    setLeftAndRight = () => {
        let container_h = document.getElementsByClassName('planetWrap')[0].clientHeight
        let container_w = document.getElementsByClassName('planetWrap')[0].clientWidth

        this.setState({
            left:container_w,
            top:container_h
        })

    }

    _onMouseMove(e){
        var pos_x = e.screenX,
            pos_y = e.screenY,
            left  = 0,
            top   = 0;

            left = Math.abs(this.state.left / 12 - pos_x);
            top  = Math.abs(this.state.top / 22 - pos_y);

            this.setState({
                left,
                top
            })

    }

    render() {
        console.log(
            this.state.left,this.state.top
        );

        const { left, top } = this.state

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
                    <div className="panel" onMouseMove={this._onMouseMove.bind(this)} >
                        <Tween
                            to={{y:'0px',opacity: 1 , delay: 1}}
                            playState={this.state.play}
                            duration={1}
                        >
                            <h1>HALO</h1>
                        </Tween>
                        <div className="planetWrap">
                            <Tween
                                to={{x:left/6,y: top/4 , ease: Expo.easeOut}}
                                duration={1}
                            >
                                <img className="planet-1" src="http://th02.deviantart.net/fs71/PRE/i/2012/337/3/6/planet_png_by_phip_phantom-d5mwylq.png" />
                            </Tween>
                            <Tween
                                to={{x:left/14,y: top/50 , ease: Expo.easeOut}}
                                duration={1}
                            >
                                <img className="planet-2" src="http://fc04.deviantart.net/fs71/i/2013/070/e/d/ice_planet___kronos_by_khrymsyn-d5xqmnm.png" />
                                {/* <div id="planet-2" className="planet layer-2"></div> */}
                            </Tween>
                        </div>
                    </div>
                </Tween>
            </div>
        )
    }
}
