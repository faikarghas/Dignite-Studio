import React, { useState, useEffect } from "react"
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import withLocale from '../../hocs/withLocale'
import useTranslation from '../../hooks/useTranslation'


import TextHeaderHome from '../../components/presentational/textHeaderHome'
import ButtonViewAllProjects from '../../components/presentational/buttonViewAllProjects'
import Layout from '../../components/layouts/base'
import data from '../../lib/copywriting/data.js'

const Project = ({trans}) => {
  const { locale, t } = useTranslation()
  // const [browserSetting] = navigator.language.split('-')
  // console.log(navigator,'lang');
  
  return (
    <section className="section_second-home width100 homeku">
      <Container className="box_allprojects" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
        <Row>
        {data.home.Project.map(item=>{
            return (
                <Link href="/[langs]/project/[project]" as={`/${locale}/project/${item.slug}`} key={item.id}>
                    <Col className="box1 p-0 placeholder" xs={4} key={item.id} data-large={item.imgUrl}>
                        <LazyLoadImage
                            alt={item.slug}
                            src={item.imgUrl}
                            effect="blur"
                            width={'100%'}
                            height={"100%"}
                        />
                        <div className="box-hover">
                            <h2>{item.title}</h2>
                            <h2>{item.Category}</h2>
                        </div>
                    </Col>
                </Link>
            )
        })}
        </Row>
        <ButtonViewAllProjects/>
      </Container>
    </section>
  )
}

const Index = () => {
  const [trans, setTrans] = useState(0);
  const {locale,t} = useTranslation()

  function handleScroll() {
    let valueScroll = window.scrollY
    if(valueScroll){
        setTrans(valueScroll/7)
    }
  }

  useEffect(() => {

    function watchScroll() {
      window.addEventListener("scroll", handleScroll);
    }

    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  });

  return (
    <Layout title={'Creative Digital Agency Indonesia | Dignite Studio'} canonical="home" metaDesc="Dignite Studio crafts experiences for your digital needs.">
        <TextHeaderHome text={data.home.title} />
        <Project trans={trans} />
    </Layout>
  );
}

export default withLocale(Index)