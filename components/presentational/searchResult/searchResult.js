import React from 'react'
import Link from 'next/link'
import { Row,Col,} from 'react-bootstrap'

import {convertMonth} from '../../../lib/date'

const searchResult = ({dataSearch,showModal}) => {
    return (
        <React.Fragment>
            {dataSearch.length >= 1 ? dataSearch.map(item => {
                let month = new Date(item.created_at).getMonth() + 1
                let date = new Date(item.created_at).getDate()
                let year = new Date(item.created_at).getFullYear()
                let tMonth = convertMonth(month)
                let categoryLowerCase = item.category.toLowerCase()

                return (
                    <Link href={`/blogDetail?category=${categoryLowerCase}&slug=${item.slug}`} as={`/blog/${categoryLowerCase}/${item.slug}`} key={item.idblog}>
                        <section className="blog_contents__box">
                            <Row>
                                <Col xs={{span:12,order:2}} md={{span:9,order:1}} >
                                    <section className="blog_contents__box-p">
                                        <ul className="featured">
                                            <li>FEATURED :</li>
                                            <li style={{color:'#FFBA00',fontWeight:700}}>{item.category}</li>
                                        </ul>
                                        <h2>{item.title}</h2>
                                        <br/>
                                        <p className="m-0 author">By Author - {tMonth} {date}, {year}</p>
                                    </section>
                                </Col>
                                <Col xs={{span:12,order:1}} md={{span:3,order:2}} className="img-blog">
                                    <img src={`https://api.dignitestudio.com/images/image/artikel/${item.imgThumbnail}.jpg`} alt="gambar artikel" width="100%" height="100%"/>
                                </Col>
                            </Row>
                        </section>
                        </Link>
                )
            }) : <h2 className="sorry-search">Sorry, I guess we haven't created anything like that. <span onClick={showModal}>Let us know it</span></h2>}
        </React.Fragment>
    )
}

export default searchResult
