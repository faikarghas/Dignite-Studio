import React, { useState, useEffect } from "react"
import { Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";

import {convertMonth} from '../../lib/date'
import Layout from '../../components/layouts/base'
import LayoutBlog from '../../components/layouts/blog/base/menu'

const BlogCa = ({dataBlog,category}) => {

        function handlePageChange (pageNumber){
            if(pageNumber === 1) {
                Router.push(`/blogCategory?category=${category}`, `/blog/${category}`);
            } else {
                Router.push(`/blogCategoryPage?category=${category}&pagenumbercat=${pageNumber}`, `/blog/${category}/${pageNumber}`);
            }
        }

        let title

        if(category === 'design'){
            title = `Blog - All About Designs | Dignite Studio`
        } else {
            title = `Blog - Business, Marketing and Branding | Dignite Studio`
        }

    return (
            <Layout title={`${title}`} canonical={`blog/${category}`} >
                <section className="section_first-blog">
                    <h1 className="mb-5">{`${category}`}</h1>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world.</p>
                </section>
                <LayoutBlog activeCategory={category}>
                {dataBlog.currPage.map(item=>{
                    let month = new Date(item.created_at).getMonth() + 1
                    let date = new Date(item.created_at).getDate()
                    let year = new Date(item.created_at).getFullYear()
                    let tMonth = convertMonth(month)

                        return (
                            <Link href={`/blog/[blogdetail]`} as={`/blog/${item.slug}`} key={item.idblog}>
                                <section className="blog_contents__box">
                                    <Row>
                                        <Col xs={{span:12,order:2}} md={{span:8,order:1}} >
                                            <section className="blog_contents__box-p">
                                                <ul className="featured">
                                                    <li>FEATURED :</li>
                                                    <li style={{color:'#FFBA00',fontWeight:700,textTransform:'uppercase'}}>{item.category}</li>
                                                </ul>
                                                <h2>{item.title}</h2>
                                                <br/>
                                                <p className="m-0 author">By Author - {tMonth} {date}, {year} </p>
                                            </section>
                                        </Col>
                                        <Col xs={{span:12,order:1}} md={{span:4,order:2}} className="img-blog">
                                            <img
                                                alt={'gambar artikel'}
                                                src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`}
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
                        activePage={1}
                        itemsCountPerPage={4}
                        totalItemsCount={dataBlog.totalPage}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                    />

                </LayoutBlog>
            </Layout>
    )
}

BlogCa.getInitialProps = async (ctx)=>{
        const {category} = ctx.query
        const res = await fetch(`${process.env.API_HOST_API}/blogCategoryPage/1/${category}`)
        const dataBlog = await res.json()
        return {dataBlog,category}
}

export default BlogCa
