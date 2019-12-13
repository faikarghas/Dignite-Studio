import { Container,Row,Col,Breadcrumb } from 'react-bootstrap'
import Link from 'next/link'
import parse from 'html-react-parser'
import fetch from 'isomorphic-unfetch'
import commentBox from 'commentbox.io';
import {convertMonth} from '../../../lib/date'


import Layout from '../../../components/layouts/base'
import ButtonToTop from '../../../components/presentational/buttonToTop'
import ShareIcon from '../../../components/presentational/shareIcon'



class BlogDetail extends React.Component {
    static async getInitialProps (ctx){
        const {langs,blogdetail} = ctx.query
        const res = await fetch(`https://api.dignite.studio/api/blogDetail/${blogdetail}`)
        const dataBlog = await res.json()
        return {dataBlog,langs,blogdetail}
    }

    state = {
        url : '',
        show:'',
        data: []
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.removeCommentBox = commentBox('5644854293954560-proj',{});
        this.setState({
            url: window.location.href,
            data: this.props.dataBlog
        })
    }

    componentWillUnmount() {
        this.removeCommentBox();
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ()=> {
        let valueScroll = window.scrollY
        const height = this.divElement.clientHeight;
        const widthWindow = window.innerWidth;
        if(valueScroll > 200 && valueScroll < height  && widthWindow >= 890){
            this.setState({
                show:'show'
            })
        } else if( valueScroll > height - 200){
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
        const {show,data} = this.state
        const {dataBlog} = this.props
        let [title,content,category] = ['','','']

        let tMonth,dataDet,date,year

        if (dataBlog.detail.length > 0) {
            dataDet = dataBlog.detail[0]

            title = dataDet.title
            content = dataDet.content
            category = dataDet.category

            let month = new Date(dataDet.created_at).getMonth() + 1
            date = new Date(dataDet.created_at).getDate()
            year = new Date(dataDet.created_at).getFullYear()
            tMonth = convertMonth(month)
        }
        let keepInspData = dataBlog.keep
        let url = this.state.url

        return (
            <Layout title={title}>
                <section className="section_first-blogDetail">
                    <Container>
                        <Row className="mb-5 justify-content-center">
                            <Col xs={12} md={8} xl={12} className="bread">
                                <Breadcrumb>
                                    <li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
                                    <li className="breadcrumb-item"><Link href="/blog" as={`/blog`}><a>Blog</a></Link></li>
                                    <li className="breadcrumb-item active">{title}</li>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} md={8} xl={7} className="content"  ref={ (divElement) => this.divElement = divElement}>
                                <h1>{title}</h1>
                                {parse(content)}
                                <div className={`info ${show}`}>
                                    <h4 className="mb-4">{category}</h4>
                                    <p>{tMonth} {date}, {year}</p>
                                    <br/>
                                    <br/>
                                    <ShareIcon url={url}/>
                                    <br/>
                                    <br/>
                                </div>
                            </Col>
                            <Col xs={12} md={8} xl={7} className="mt-5">
                                <div className="commentbox" id="contoh2"/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="section_third-slider">
                    <Container>
                        <Row>
                            <Col md={12} className="text-center">
                                <h2>Keep Inspired</h2>
                            </Col>
                            {keepInspData.map(item => {
                                let categoryLowerCase = item.category.toLowerCase()

                                return (
                                    <Col xs={12} md={4} className="xs-p-0 mb-5" key={item.idblog}>
                                        <div className="box">
                                            <div className="box-img">
                                                <img src={`https://api.dignite.studio/images/image/artikel/${item.imgThumbnail}.jpg`} width="100%"></img>
                                            </div>
                                            <Link href={`/blog/[blogdetail]`} as={`/blog/${item.slug}`} key={item.idblog}>
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
