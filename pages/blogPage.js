import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Layout from '../components/layouts'
import LayoutBlog from '../components/layouts-blog'
import {convertMonth} from '../lib/date'

class BlogPage extends React.Component {

    static async getInitialProps(ctx){
        const {page} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/blogCategoryPage/${page}/all`)
        const dataBlog = await res.json()
        return {dataBlog,page}
    }

    state = {
        activePage : 0
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


    render(){
        return (
            <Layout title={'Blog'}>
                <section className="section_first-blog">
                    <h2 className="mb-5">BLOG</h2>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
                </section>
                <LayoutBlog allTopics={'active'}>
                    {this.props.dataBlog.currPage.map(item=>{
                        let month = new Date(item.created_at).getMonth() + 1
                        let date = new Date(item.created_at).getDate() 
                        let year = new Date(item.created_at).getFullYear() 
                        let tMonth = convertMonth(month)
                        let categoryLowerCase = item.category.toLowerCase()

                        return (
                            <Link href={`/blogDetail?category=${categoryLowerCase}&slug=${item.slug}`} as={`/blog/${categoryLowerCase}/${item.slug}`} key={item.idblog}>
                                <section className="blog_contents__box">
                                    <Row>
                                        <Col xs={{span:12,order:2}} md={{span:8,order:1}} >
                                            <section className="blog_contents__box-p">
                                                <ul className="featured">
                                                    <li>FEATURED :</li>
                                                    <li style={{color:'#FFBA00',fontWeight:700}}>{item.category}</li>
                                                </ul>
                                                <h2>{item.title}</h2>
                                                <br/>
                                                <p className="m-0 author">By Author - {tMonth} {date}, {year} </p>
                                            </section>
                                        </Col>
                                        <Col xs={{span:12,order:1}} md={{span:4,order:2}} className="img-blog">
                                            <LazyLoadImage
                                                alt={'gambar artikel'}
                                                src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`}
                                                effect="blur"
                                                width={'100%'} 
                                                height={"100%"}
                                            />
                                        </Col>
                                    </Row>
                                </section>
                            </Link>
                        )
                    })}

                    <Pagination
                        activePage={Number(this.props.page)}
                        itemsCountPerPage={4}
                        totalItemsCount={this.props.dataBlog.totalPage}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </LayoutBlog>
            </Layout>
        )
    }

}

export default BlogPage
