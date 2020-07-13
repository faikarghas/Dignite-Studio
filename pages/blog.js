import React, { useState } from "react"
import { Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import {motion} from 'framer-motion'

import {convertMonth} from '../lib/date'
import Layout from '../components/layouts/base'
import LayoutBlog from '../components/layouts/blog/base/menu'


const variants = {
    initial:{scale:0.95,opacity:1},
    enter: { scale: 1, y: 0, opacity: 1 },
    exit: {
      scale: 0.9,
      opacity: 0,
    }
};

const Blog = ({dataBlog}) => {
    const [activePage, setActivePage] = useState(1)

    function handlePageChange(pageNumber) {
        if(pageNumber === 1) {
            Router.push(`/blog`,`/blog`);
        } else {
            Router.push(`/blog/page/[pagenumber]`, `/blog/page/${pageNumber}`);
        }
    }

    return (
        <Layout title={'Business, Marketing, Design | Dignite Studio'} canonical="blog" metaDesc="Business to entrepreneurship, marketing tips and the occasional musings of our digital world.">
            <motion.section
            key="textblog"
            initial="initial"
            exit="exit"
            animate="enter"
            variants={variants}
            className="section_first-blog">
                <h1 className="mb-5">BLOG</h1>
                <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
            </motion.section>
            <LayoutBlog allTopics={'active'}>
                {dataBlog.currPage.map(item=>{

                    let month = new Date(item.created_at).getMonth() + 1
                    let date = new Date(item.created_at).getDate()
                    let year = new Date(item.created_at).getFullYear()
                    let tMonth = convertMonth(month)
                    return (
                        <Link href={`/blog/[blogdetail]`} as={`/blog/${item.slug}`} key={item.idblog}>
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
                                        <img
                                            width="100%"
                                            height="100%"
                                            src={`https://api.dignite.studio/images/image/artikel/${item.imgThumbnail}.jpg`}
                                            alt={item.imgThumbnail} />
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

export async function getServerSideProps() {
    const res = await fetch(`${process.env.API_HOST_API}/blog/1`)
    const dataBlog = await res.json()

    return {
      props: {
        dataBlog,
      },
    }
}


export default Blog
