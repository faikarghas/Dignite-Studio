import React, { useState } from "react"
import { Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'

import {convertMonth} from '../../lib/date'
import Layout from '../../components/layouts/base'
import LayoutBlog from '../../components/layouts/blog/lang/menu'
import withLocale from '../../hocs/withLocale'
import useTranslation from '../../hooks/useTranslation'

const Blog = ({dataBlog}) => {
    const [activePage, setActivePage] = useState(1)
    const {locale,t} = useTranslation()

    function handlePageChange(pageNumber) {
        if(pageNumber === 1) {
            Router.push(`/[langs]/blog`,`/${locale}/blog`);
        } else {
            Router.push(`/[langs]/blog/page/[pagenumber]`, `/${locale}/blog/page/${pageNumber}`);
        }
    }


    return (
        <Layout title={'Business, Marketing, Design | Dignite Studio'} canonical="blog" metaDesc="Business to entrepreneurship, marketing tips and the occasional musings of our digital world.">
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
                    return (
                        <Link href={`/[langs]/blog/[blogdetail]`} as={`/${locale}/blog/${item.slug}`} key={item.idblog}>
                        {/* <Link href={`/blogDetail?category=${categoryLowerCase}&slug=${item.slug}`} as={`/blog/${categoryLowerCase}/${item.slug}`} key={item.idblog}> */}
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
                                        <img width="100%" height="100%" alt={item.imgThumbnail} src={`http://api.dignite.studio/images/image/artikel/${item.imgThumbnail}.jpg`}/>
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
    const res = await fetch(`http://api.dignite.studio/api/blog/1`)
    const dataBlog = await res.json()

    return {dataBlog}
}

export default withLocale(Blog)
