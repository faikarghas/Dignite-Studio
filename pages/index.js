import Link from 'next/link'

import Layout from '../components/layout'

class index extends React.Component{
    state = {
        trans : 0,
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = ()=> {
        let valueScroll = window.scrollY
        if(valueScroll){
            this.setState({
                trans : valueScroll / 7,
            })
        }

    }
    render(){
        const {trans} = this.state
        return (
            <Layout>
                <section className="section_first-home width100">
                    <div className="container">
                        <h1 className="text-center">We craft experiences <br/> for your digital needs.</h1>
                    </div>
                </section>
                <section className="section_second-home width100 homeku">
                    <div className="container box_allprojects" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
                        <div className="row">
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image1.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image5.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image2.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image6.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image10.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-4 box1 p-0">
                                {/* <img src="../static/image/Image11.png" width="100%" height="100%"></img> */}
                                <Link href="/project">
                                    <div className="box-hover">
                                        <h2>PROJECT NAME</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <Link href="/work">
                            <div className="view_allpr">
                                <a className="pr-4 pl-4">View all our projects</a>
                            </div>
                        </Link>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default index
