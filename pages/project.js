import Layout from '../components/layout'
import Slider from "react-slick";
import { Player, BigPlayButton } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";


class project extends React.Component {
    state = {
        trans : 0
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
            slidesToScroll: 1
        };
        return (
            <Layout>
                <section className="section_first-project text-center">
                    <h1 className="text-center mb-5">PROJECT NAME</h1>
                    <p className="">Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                    <div className="button_seeLive">
                        <a>See Live</a>
                    </div>
                </section>
                <section className="section_second-project width100 p-0">
                    <img  src="../static/image/Project1.png" width="100%"/>
                </section>
                <section className="section_third-project text-center">
                    <h1>Challenge</h1>
                    <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                </section>
                <section className="section_fourth-project text-center">
                    <Slider {...settings}>
                        <img src="../static/image/laptop.png" width="100%"/>
                        <img src="../static/image/laptop.png" width="100%"/>
                        <img src="../static/image/laptop.png" width="100%"/>
                    </Slider>
                </section>
                <section className="section_fifth-project text-center">
                    <h1>Solution</h1>
                    <p>Illum mallem levares, quo optimum atque humanis simum virum, Cn. Tu autem negas fortem esse <br/> quem quam posse, qui dolorem m alum putet. Cupiditates non Epicuri divisione finiebat, sed sua satietate.</p>
                </section>
                <section className="section_sixth-project text-center">
                    <img src="../static/image/Home.png" width="100%" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}/>
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
                            <div class="text-center">
                                <img src="../static/image/Person3.png" class="rounded" alt="..."/>
                            </div>
                        </li>
                        <li className="client-name">
                            <h1>Client Name</h1>
                            <p>Marketing Manager</p>
                        </li>
                    </ul>
                </section>
                <section className="section_ninth-project">
                    <a>Next Project</a>
                    <a>PROJECT NAME &nbsp; -></a>
                </section>
            </Layout>
        )
    }
}

export default project
