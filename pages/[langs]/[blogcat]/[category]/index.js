import React, { useState, useEffect } from "react"
import { Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {convertMonth} from '../../../../lib/date'
import Layout from '../../../../components/layouts'
import LayoutBlog from '../../../../components/layouts-blog'
import withLocale from '../../../../hocs/withLocale'
import useTranslation from '../../../../hooks/useTranslation'

const BlogCa = ({dataBlog,category}) => {
        const {locale,t} = useTranslation()

        function handlePageChange (pageNumber){
            if(pageNumber === 1) {
                Router.push(`/blogCategory?category=${category}`, `/blog/${category}`);
            } else {
                Router.push(`/[langs]/[blogcat]/[category]/[pagenumbercat]`, `/${locale}/blog/${category}/${pageNumber}`);
            }
        }

        let currCategory = category
        let splitTitle = currCategory.split('')
        let arrTitle = []

        for (let i = 0; i < splitTitle.length; i++) {
            if (i === 0) {
                arrTitle.push(splitTitle[i].toUpperCase())
            } else {
                arrTitle.push(splitTitle[i])
            }
        }

        let resTitle = arrTitle.join('')
        let title = `${resTitle} Blog`

        if(category === 'announcement'){
            title = `${resTitle}`
        }

    return (
            <Layout title={`${title}`} canonical={`blog/${category}`}>
                <section className="section_first-blog">
                    <h1 className="mb-5">{`${category}`}</h1>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
                </section>
                <LayoutBlog activeCategory={category}>
                {dataBlog.currPage.map(item=>{
                    let month = new Date(item.created_at).getMonth() + 1
                    let date = new Date(item.created_at).getDate()
                    let year = new Date(item.created_at).getFullYear()
                    let tMonth = convertMonth(month)

                        return (
                            <Link href={`/[langs]/blog/[blogdetail]`} as={`/${locale}/blog/${item.slug}`} key={item.idblog}>
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
        const {category,langs} = ctx.query
        // console.log( ctx.query);
        const res = await fetch(`https://api.dignitestudio.com/api/blogCategoryPage/1/${category}`)
        const dataBlog = await res.json()
        return {dataBlog,category}
}

export default withLocale(BlogCa)
