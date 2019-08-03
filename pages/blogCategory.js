import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'

import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'

import Layout from '../components/layouts'
import LayoutBlog from '../components/layouts-blog'

class BlogCa extends React.Component {

    static async getInitialProps(ctx) {
        const {category} = ctx.query
        const res = await fetch('https://api.dignitestudio.com/api/blog1/')
        const resLength = await fetch('https://api.dignitestudio.com/api/blog/')
        const allData = await resLength.json()
        const dataBlog = await res.json()
        return {category,allData,dataBlog}
    }

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
        };
    }

    handlePageChange = (pageNumber) => {
        if(pageNumber === 1) {
            Router.push(`/blogCategory?category=${this.props.category}`, `/blog/${this.props.category}`);
        } else {
            Router.push(`/blogCategoryPage?category=${this.props.category}&page=${pageNumber}`, `/blog/${this.props.category}/page/${pageNumber}`);
        }
    }


    render(){
        let slug = 'inijudul'
        let activeCategory = ''
        let dataLength = this.props.allData.length
        if(this.props.category === 'business'){
            activeCategory = 'business'
        } else if (this.props.category === 'design'){
            activeCategory = 'design'
        } else if (this.props.category === 'tech'){
            activeCategory = 'tech'
        } else if (this.props.category === 'announcement') {
            activeCategory = 'announcement'
        }
        return (
            <Layout>
                <section className="section_first-blog">
                    <h1 className="mb-5">BLOG</h1>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
                </section>
                <LayoutBlog activeCategory={activeCategory}>
                {this.props.dataBlog.map(item=>{
                        return (
                            <Link href={`/blogCategoryDetail?category=${this.props.category}&slug=${slug}`} as={`/blog/${this.props.category}/${slug}`} key={item.id}>
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
                        activePage={this.state.activePage}
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

export default BlogCa
