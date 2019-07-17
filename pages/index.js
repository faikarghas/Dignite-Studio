import Link from 'next/link'

import Layout from '../components/layouts'

import GAwrapper from '../lib/GAWarp'

import TextHeader from '../components/presentational/textHead'
import BoxProject from '../components/presentational/boxProjectHome'

import { Container,Row } from 'react-bootstrap';

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
        const renderBox = data.home.Project.map(item=>{
            return (
                <BoxProject key={item.id} text={item.title} category={"Web Development and UI/UX"}/>
            )
        })
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
                            {renderBox}
                        </Row>
                        <Link href="/work">
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
