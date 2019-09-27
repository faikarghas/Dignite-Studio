import { Container,Row,Col,Breadcrumb } from 'react-bootstrap'
import Link from 'next/link'
import parse from 'html-react-parser'
import fetch from 'isomorphic-unfetch'
import commentBox from 'commentbox.io';
import {convertMonth} from '../lib/date'

import Layout from '../components/layouts'
import ButtonToTop from '../components/presentational/buttonToTop'
import ShareIcon from '../components/presentational/shareIcon'


class BlogDetail extends React.Component {

    static async getInitialProps (ctx){
        const {slug} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/blogDetail/${slug}`)
        const dataBlog = await res.json()
        const resCat = await fetch(`https://api.dignitestudio.com/api/blogCategory/${dataBlog[0].category}`)
        const dataCategory = await resCat.json()
        console.log(slug)
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
        const height = this.divElement.clientHeight ;

        const widthWindow = window.innerWidth;
        if(valueScroll >= 190 && valueScroll <= height  && widthWindow >= 890){
            this.setState({
                show:'show'
            })
        } else if( valueScroll >= height){
            this.setState({
                show:''
            })
        } else if (valueScroll < 199){
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
            <Layout title={data.title}>
                <section className="section_first-blogDetail">
                    <Container>
                        <Row className="mb-5 justify-content-center">
                            <Col xs={12} md={8} xl={7} className="bread">
                                <Breadcrumb>
                                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                                    <li className="breadcrumb-item"><Link href="/blog"><a>Blog</a></Link></li>
                                    <li className="breadcrumb-item active">{data.title}</li>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} md={8} xl={7} className="content"  ref={ (divElement) => this.divElement = divElement}>
                                <h1>{data.title}</h1>
                                {parse(data.content)}
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
                            {/* <Col xs={12} md={8} xl={7} className="mt-cm"> */}
                                {/* <div className="commentbox" id="contoh2"/> */}
                            {/* </Col> */}
                        </Row>
                    </Container>
                </section>
                <section className="section_third-slider">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center">
                                <h2>Keep Inspired</h2>
                            </Col>
                            {allDataCategory.map(item => {
                                return (
                                    <Col xs={12} md={4} className="xs-p-0 mb-5" key={item.idblog}>
                                        <div className="box">
                                            <div className="box-img">
                                                <img src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`} width="100%" alt="sosmed-icon"></img>
                                            </div>
                                            <Link href={`/blogDetail?slug=${item.slug}`} as={`/blog/${item.slug}`} key={item.idblog}>
                                                <a><h3>{item.title}</h3></a>
                                            </Link>
                                            <p className="category">{item.category}</p>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </section>
                <ButtonToTop/>
            </Layout>
        )
    }

}

export default BlogDetail
