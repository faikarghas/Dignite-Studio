import { Container,Row,Col } from 'react-bootstrap'

import Link from 'next/link'
import Router from 'next/router'

import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layouts'
import LayoutBlog from '../components/layouts-blog'

class BlogPage extends React.Component {

    static async getInitialProps(ctx){
        const {page} = ctx.query
        const res = await fetch('https://api.dignitestudio.com/api/blog1/')
        const resLength = await fetch('https://api.dignitestudio.com/api/blog/')
        const dataBlog = await res.json()
        const allData = await resLength.json()
        return {dataBlog,allData,page}
    }

    constructor(props) {
        super(props);
        this.state = {
            page : this.props.page,
            activePage : 0
        };
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage:pageNumber
        })
        if(pageNumber === 1) {
            Router.push(`/blog`);
        } else {
            Router.push(`/blogPage?page=${pageNumber}`, `/blog/page/${pageNumber}`);
        }
    }

    componentDidUpdate(a,b){
        if(b.page !== b.activePage){
            this.setState({page:b.activePage})
        }
    }

    render(){
        let year = 2019
        let slug = 'inijudul'
        let dataLength = this.props.allData.length
        return (
            <Layout>
                <section className="section_first-blog">
                    <h1 className="mb-5">BLOG</h1>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
                </section>
                <LayoutBlog allTopics={'active'}>
                    {this.props.dataBlog.map(item=>{
                        return (
                            <Link href={`/blogDetail?${slug}`} as={`/blog/${slug}`} key={item.id}>
                                <section className="blog_contents__box">
                                    <Row>
                                        <Col xs={{span:12,order:2}} md={{span:9,order:1}} >
                                            <section className="blog_contents__box-p">
                                                <ul className="featured">
                                                    <li>FEATURED :</li>
                                                    <li style={{color:'#FFBA00',fontWeight:700}}>MARKETING {item.idblog}</li>
                                                </ul>
                                                <h2>How to Gain Organic Followers on Instagram in 2019</h2>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using…</p>
                                                <br/>
                                                <p className="m-0">By AuthorName - July 31, 2019 </p>
                                            </section>
                                        </Col>
                                        <Col xs={{span:12,order:1}} md={{span:3,order:2}} className="img-blog">
                                            <img src='https://api.dignitestudio.com/images/image/postmarketing.png' alt="gambar artikel" width="100%" height="100%"/>
                                        </Col>
                                    </Row>
                                </section>
                            </Link>
                        )
                    })}

                    <Pagination
                        activePage={Number(this.state.page)}
                        itemsCountPerPage={4}
                        totalItemsCount={dataLength}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </LayoutBlog>
            </Layout>
        )
    }

}

export default BlogPage
