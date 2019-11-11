import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container,Row,Col } from 'react-bootstrap';

import { getInitialLocale } from '../translations/getInitialLocale'
import data from '../lib/copywriting/data.js'
import TextHeader from '../components/presentational/textHeader'
import Layout from '../components/layouts'


const Process = () => (
    <section className="section_second-about width100">
        <Container>
            <Row>
                {data.about.process.map((data,i)=>(
                    <Col className="box" xs={12} md={3} key={i}>
                        <h2 className="mb-5">{data.title}</h2>
                        <p>{data.description}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
)

const WhatWeDo = () => (
    <section className="section_third-about">
        <Container>
            <Row>
                <Col className="box" xs={6}>
                    <h2 className="mb-5">What<br/>We Do?</h2>
                </Col>
                <Col className="box" xs={6}>
                    <ul className="text-center">
                        {data.about.do.map( (item,i) =>(
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
)


const OurTeam = () => (
    <section className="section_fourth-about">
        <Container>
            <Row>
                <Col className="box" xs={12} md={6}>
                    <h2 className="mb-5">Meet<br/>Our Team</h2>
                </Col>
                <Col className="box" xs={12} md={6}>
                    <Row>
                        {data.about.team.map((item,i)=>(
                            <Col className="box-photo p-0" xs={5}>
                                <LazyLoadImage
                                    alt={item.alt}
                                    src={item.LinkPhoto}
                                    effect="blur"
                                    width={'100%'}
                                />
                                <div className="overlay-yellow">
                                    <p>{item.name}</p>
                                    <p style={{fontSize:'1.5rem'}}>{item.job}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)

const about = () =>  {
    React.useEffect(() => {
      window.location.replace(`/${getInitialLocale()}/about`)
    })
    return(
      <Layout title={'Solution for Your Creative Digital Needs | Dignite Studio'} canonical="about" metaDesc="Supported by different backgrounds of the founders, Dignite Studio specializes in crafting digital experiences for brands that are ready to make an impact.">
          <TextHeader text={data.about.title} />
          <Process/>
          <WhatWeDo/>
      </Layout>
    )
}

export default about


