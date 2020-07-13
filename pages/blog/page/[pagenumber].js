import { Container,Row,Col } from 'react-bootstrap'
import Link from 'next/link'
import Router from 'next/router'
import Pagination from "react-js-pagination";

import Layout from '../../../components/layouts/base'
import LayoutBlog from '../../../components/layouts/blog/base/menu'
import {convertMonth} from '../../../lib/date'

class BlogPage extends React.Component {

    static async getInitialProps(ctx){
        const {pagenumber,category} = ctx.query

        const res = await fetch(`${process.env.API_HOST_API}/blogCategoryPage/${pagenumber}/all`)
        const dataBlog = await res.json()
        return {dataBlog,pagenumber,category}
    }


    state = {
        activePage : 0
    }

    handlePageChange = (pageNumber) => {
        this.setState({
            activePage:pageNumber
        })
        if(pageNumber === 1) {
            Router.push(`/blog`,`/blog`);
        } else {
            Router.push(`/blog/page/[pagenumber]`, `/blog/page/${pageNumber}`);
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
                        // let categoryLowerCase = item.category.toLowerCase()

                        return (
                            <Link href={`/blog/[blogdetail]`} as={`/blog/${item.slug}`} key={item.idblog}>
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
                                            <img
                                                alt={'gambar artikel'}
                                                src={`${process.env.API_HOST_IMG}/artikel/${item.imgThumbnail}.jpg`}
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
                        activePage={Number(this.props.pagenumber)}
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

// export async function getStaticPaths() {
//     // Call an external API endpoint to get posts
//     const res = await fetch(`${process.env.API_HOST_API}/allBlog`)
//     const posts = await res.json()

//     // Get the paths we want to pre-render based on posts
//     let paths = []

//     for (let i = 1; i <= posts.totalPage; i++) {
//         paths.push({params: { pagenumber: i.toString()}})
//     }

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return {
//       paths,
//       fallback: false
//      }
// }

// export async function getStaticProps({params}) {

//     const {pagenumber} = params
//     const res = await fetch(`${process.env.API_HOST_API}/blogCategoryPage/${pagenumber}/all`)
//     const dataBlog = await res.json()
//     return {
//         props:{ dataBlog, pagenumber }
//     }
// }

export default BlogPage
