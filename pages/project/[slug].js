import React from 'react'
import Layout from '../../components/layouts'
import Slider from "react-slick";
import { Player, BigPlayButton } from 'video-react';
import GAwrapper from '../../lib/GAWarp';
import data from '../../lib/copywriting/data.js'


import "../../node_modules/video-react/dist/video-react.css";


class Project extends React.Component {

    static async getInitialProps(ctx){
        const { slug } = ctx.query
        const res = await data.home
        return {slug,res}
    }

    state = {
        trans : 0,
        data: this.props.res,
        slug: this.props.slug
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = ()=> {
        let valueScroll = window.scrollY
        if(valueScroll){
            this.setState({
                trans : valueScroll / 7,
            })
        }

    }
    render(){
        const {trans} = this.state
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: false
        };
        const data = this.state.data.Project.filter((item)=>{
            return item.slug === this.state.slug
        })
        return (
            <Layout>
                <section className="section_first-project text-center">
                    <h1 className="text-center mb-5">{data[0].title}</h1>
                    <p className="">Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                    <a className="button_seeLive" href={data[0].link} target="_blank">See Live</a>
                </section>
                <section className="section_second-project width100 p-0">
                    <img  src={data[0].landingImg} width="100%" alt="project-img"/>
                </section>
                <section className="section_third-project text-center">
                    <h2>Challenge</h2>
                    <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                </section>
                <section className="section_fourth-project text-center">
                    <Slider {...settings}>
                        {data[0].carouselImg.map((item,i)=>{
                            return (
                                <img key={i} src={item} width="100%" alt="project-mockup"/>
                            )
                        })}
                    </Slider>
                </section>
                <section className="section_fifth-project text-center">
                    <h2>Solution</h2>
                    <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                </section>
                <section className="section_sixth-project text-center">
                    <img src="../static/image/Home.png" width="100%" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}} alt="project-mockup2"/>
                </section>
                <section className="section_seventh-project width100 p-0">
                    <Player
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        poster="../static/image/Video.png"
                    >
                        <BigPlayButton position="center" />
                    </Player>
                </section>
                <section className="section_eighth-project text-center">
                    <div className="container pl-5 pr-5">
                        <p className="quotes">We love Dignite autem negas fortem esse quemquam posse, qui dolorem malum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Quia nec honesto quic quam honestius nec turpi</p>
                    </div>
                    <br/>
                    <br/>
                    <ul>
                        <li>
                            <div className="text-center">
                                <img src="../static/image/Person3.png" className="rounded" alt="person-img"/>
                            </div>
                        </li>
                        <li className="client-name">
                            <h2>Client Name</h2>
                            <p>Marketing Manager</p>
                        </li>
                    </ul>
                </section>
                <section className="section_ninth-project">
                    <p>Next Project</p>
                    <a>PROJECT NAME &nbsp; -></a>
                </section>
            </Layout>
        )
    }
}

export default Project
