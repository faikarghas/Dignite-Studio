import { Container,Row,Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SplitText from 'react-pose-text';

import Layout from '../components/layouts'
import data from '../lib/copywriting/data.js'
import Head from 'next/head';

const charPoses = {
    exit: { opacity: 0 },
    enter: {
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 30
    }
};

class Index extends React.Component{
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
            <Layout title={'Home'} canonical="home">
                <section className="textHeaderHome width100">
                    <Container>
                        {/* <Fade bottom> */}
                            <h1 className="text-center">
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    {data.home.title}
                                </SplitText>
                            </h1>
                        {/* </Fade> */}
                    </Container>
                </section>
                <section className="section_second-home width100 homeku">
                    <Container className="box_allprojects" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
                        <Row>
                        {data.home.Project.map(item=>{
                            return (
                                <Link href="/project/[slug]" as={`/project/${item.slug}`} key={item.id}>
                                    <Col className="box1 p-0" xs={4} key={item.id}>
                                        <LazyLoadImage
                                            alt={'project-img'}
                                            src={item.imgUrl}
                                            effect="blur"
                                            width={'100%'}
                                            height={"100%"}
                                        />
                                        <div className="box-hover">
                                            <h2>{item.title}</h2>
                                            <h2>{item.Category}</h2>
                                        </div>
                                    </Col>
                                </Link>
                            )
                        })}
                        </Row>
                        <div className="view_allpr">
                            <Link  href="/work"><a>View all our projects</a></Link>
                        </div>
                    </Container>
                </section>
            </Layout>
        )
    }
}

export default Index
