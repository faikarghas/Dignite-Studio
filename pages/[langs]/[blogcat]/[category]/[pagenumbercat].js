import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";
import fetch from 'isomorphic-unfetch'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Layout from '../../../../components/layouts'
import LayoutBlog from '../../../../components/layouts-blog'
import {convertMonth} from '../../../../lib/date'
import withLocale from '../../../../hocs/withLocale'

class BlogPage extends React.Component {

    static async getInitialProps(ctx){
        const {pagenumbercat,langs,category} = ctx.query
        const res = await fetch(`https://api.dignitestudio.com/api/blogCategoryPage/${pagenumbercat}/${category}`)
        const dataBlog = await res.json()
        return {dataBlog,pagenumbercat,langs,category}
    }

    state = {
        activePage : 0
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage:pageNumber
        })
        if(pageNumber === 1) {
            Router.push(`/[langs]/blog/[category]`,`/${this.props.langs}/blog/${this.props.category}`);
        } else {
            Router.push(`/[langs]/blog/page/[pagenumbercat]`, `/${this.props.langs}/blog/page/${pageNumber}`);
        }
    }


    render(){
        let activeCategory
        if(this.props.category === 'business'){
            activeCategory = 'business'
        } else if (this.props.category === 'design'){
            activeCategory = 'design'
        } else if (this.props.category === 'tech'){
            activeCategory = 'tech'
        } else if (this.props.category === 'announcement') {
            activeCategory = 'announcement'
        }

        let category = this.props.category
        let splitTitle =   category.split('')
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

        if(this.props.category === 'announcement'){
            title = `${resTitle}`
        }
        return (
            <Layout title={'Blog'}>
                <section className="section_first-blog">
                    <h2 className="mb-5">BLOGfff</h2>
                    <p>Business to entrepreneurship and marketing tips, Dignite announcements,<br/> and the occasional musings of our digital world. </p>
                    <p>page </p>
                </section>
                <LayoutBlog activeCategory={activeCategory}>
                    {this.props.dataBlog.currPage.map(item=>{
                        let month = new Date(item.created_at).getMonth() + 1
                        let date = new Date(item.created_at).getDate() 
                        let year = new Date(item.created_at).getFullYear() 
                        let tMonth = convertMonth(month)
                        // let categoryLowerCase = item.category.toLowerCase()

                        return (
                            <Link href={`/[langs]/blog/[blogdetail]`} as={`/${this.props.langs}/blog/${item.slug}`} key={item.idblog}>
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
                        activePage={Number(this.props.pagenumbercat)}
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

export default withLocale(BlogPage)
