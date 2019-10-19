import React, { useState, useEffect } from "react"
import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {convertMonth} from '../lib/date'
import Layout from '../components/layouts'
import LayoutBlog from '../components/layouts-blog'

const Blog = ({dataBlog}) => {
    const [activePage, setActivePage] = useState(0)

    function handlePageChange(pageNumber) {
        if(pageNumber === 1) {
            Router.push(`/blog`);
        } else {
            Router.push(`/blogPage?page=${pageNumber}`, `/blog/page/${pageNumber}`);
        }
    }


    return (
        <Layout title={'Blog'} canonical="blog">
            <section className="section_first-blog">
                <h1 className="mb-5">BLOG</h1>
                <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
            </section>
            <LayoutBlog allTopics={'active'}>
                {dataBlog.currPage.map(item=>{

                    let month = new Date(item.created_at).getMonth() + 1
                    let date = new Date(item.created_at).getDate()
                    let year = new Date(item.created_at).getFullYear()
                    let tMonth = convertMonth(month)
                    let categoryLowerCase = item.category.toLowerCase()
                    return (
                        <Link href={`/blogDetail?category=${categoryLowerCase}&slug=${item.slug}`} as={`/blog/${categoryLowerCase}/${item.slug}`} key={item.idblog}>
                            <section className="blog_contents__box" >
                                <Row>
                                    <Col xs={{span:12,order:2}} md={{span:8,order:1}} className="content-blog">
                                        <section className="blog_contents__box-p">
                                            <ul className="featured">
                                                <li>FEATURED :</li>
                                                <li style={{color:'#FFBA00',fontWeight:700,textTransform:'uppercase'}}>{item.category}</li>
                                            </ul>
                                            <h2>{item.title}</h2>
                                            <br/>
                                            <p className="m-0 author">By Author - {tMonth} {date}, {year}</p>
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

                <div className="pagination_box">
                    <Pagination
                        activePage={Number(activePage)}
                        itemsCountPerPage={4}
                        totalItemsCount={dataBlog.totalPage}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />
                </div>
            </LayoutBlog>
        </Layout>
    )
}

Blog.getInitialProps = async ({ req }) => {
    const res = await fetch(`https://api.dignitestudio.com/api/blog/1`)
    const dataBlog = await res.json()

    return {dataBlog}
}

export default Blog
