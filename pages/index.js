import Layout from '../components/layouts'

import GAwrapper from '../lib/GAWarp'
import { Container,Row,Col } from 'react-bootstrap';

import Link from 'next/link'

import data from '../lib/copywriting/data.js'

class index extends React.Component{
    state = {
        trans : 0,
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
        return (
            <GAwrapper>
            <Layout>
                <section className="textHeaderHome width100">
                    <Container>
                        <h1 className="text-center">{data.home.title}</h1>
                    </Container>
                </section>
                <section className="section_second-home width100 homeku">
                    <Container className="box_allprojects" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
                        <Row>
                        {data.home.Project.map(item=>{
                            return (
                                <Link  href="/work">
                                    <Col className="box1 p-0" xs={4}>
                                            <img src={item.imgUrl} width="100%" height="100%" alt="project-img"></img>
                                            <div className="box-hover">
                                                <h2>{item.title}</h2>
                                                <h2>{item.Category}</h2>
                                            </div>
                                    </Col>
                                </Link>

                            )
                        })}
                        </Row>
                        <Link href="/project-detail">
                            <div className="view_allpr">
                                <a className="pr-4 pl-4">View all our projects</a>
                            </div>
                        </Link>
                    </Container>
                </section>
            </Layout>
            </GAwrapper>
        )
    }
}

export default index
