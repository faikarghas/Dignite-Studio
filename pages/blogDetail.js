import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import parse from 'html-react-parser'
import fetch from 'isomorphic-unfetch'
import commentBox from 'commentbox.io';
import {convertMonth} from '../lib/date'
import Slider from "react-slick";

import Layout from '../components/layouts'
import ShareIcon from '../components/presentational/shareIcon'


class BlogDetail extends React.Component {

    static async getInitialProps (ctx){
        const {slug} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/blogDetail/${slug}`)
        const dataBlog = await res.json()
        const resCat = await fetch(`https://api.dignitestudio.com/api/blogCategory/${dataBlog[0].category}`)
        const dataCategory = await resCat.json()
        return {dataBlog,dataCategory}
    }

    state = {
        url : '',
        show: ''
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.removeCommentBox = commentBox('5644854293954560-proj',{});
        this.setState({
            url: window.location.href
        })
    }

    componentWillUnmount() {
        this.removeCommentBox();
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = ()=> {
        let valueScroll = window.scrollY
        console.log(valueScroll);
        if(valueScroll > 300 && valueScroll < 2499){
            this.setState({
                show:'show'
            })
        } else if( valueScroll > 2500){
            this.setState({
                show:''
            })
        } else {
            this.setState({
                show:''
            })
        }
    }

    render(){
        const {show} = this.state

        let data = this.props.dataBlog[0]
        let allDataCategory = this.props.dataCategory
        let month = new Date(data.created_at).getMonth() + 1
        let date = new Date(data.created_at).getDate() 
        let year = new Date(data.created_at).getFullYear() 
        let tMonth = convertMonth(month)
        let url = this.state.url

        const settings = {
            className: "center",
            centerMode: true,
            infinite: false,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            variableWidth: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerPadding: "30px",
                  }
                },
              ]
        };

        return (
            <Layout>
                <section className="section_first-blogDetail">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} md={8} className="content">
                                <h1>{data.title}</h1>
                                {parse(data.content)}
                                {/* <div className="ads">
                                    <h2>Boosting Your Sales Like Never Before</h2>
                                    <p>Turn your followers into potential customers by creating growth and building online <br/> community.</p>
                                    <br/>
                                    <Link href="/about"><a>Let's go <img src="https://api.dignitestudio.com/images/image/right-arrow.svg" width="20px" alt="icon next" /></a></Link>
                                </div> */}
                                <div className={`info ${show}`}>
                                    <h4 className="mb-4">{data.category}</h4>
                                    <p>{tMonth} {date}, {year}</p>
                                    <br/>
                                    <br/>
                                    <ShareIcon url={url}/>
                                    <br/>
                                    <br/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_second-comment">
                    <Container>
                        <Row>
                            <Col>
                                <div className="commentbox" id="contoh2"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_third-slider">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h2>Keep Inspired</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Slider {...settings}>
                                {allDataCategory.map(item => {
                                    return (
                                        <div className="box">
                                            <div className="box-img">
                                                <img src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`} width="100%"></img>
                                            </div>
                                            <Link href={`/blogDetail?slug=${item.slug}`} as={`/blog/${item.slug}`} key={item.idblog}>
                                                <a><h3>{item.title}</h3></a>
                                            </Link>
                                            <p className="category">{item.category}</p>
                                        </div>
                                    )
                                })}
                            </Slider>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }

}

export default BlogDetail
