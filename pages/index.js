import React, { useState, useEffect } from "react"
import { Container,Row,Col } from 'react-bootstrap';
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import {motion} from 'framer-motion';

import TextHeaderHome from '../components/presentational/textHeader'
import ButtonViewAllProjects from '../components/presentational/buttonViewAllProjects'
import Layout from '../components/layouts/base'
import data from '../lib/copywriting/data.js'


export const Project = ({trans,dataku}) => {
  return (
    <section className="section_second-home width100 homeku">
      <Container className="box_allprojects" style={{WebkitTransform:`translate(-50%,${-trans}px)`,msTransform:`translate(-50%,${-trans}px)`,transform:`translate(-50%,${-trans}px)`}}>
        <Row>
          {data.home.Project.map(item=>{
              return (
                  <Link href="/project/[project]" as={`/project/${item.slug}`} key={item.id}>
                      <Col className="box1 p-0 placeholder" xs={4} key={item.id} data-large={item.imgUrl}>
                          <img width="100%" height="100%" src={item.imgUrl} alt={item.slug} />
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
        setTrans(valueScroll/5)
    }
  }

  useEffect(() => {
    // window.location.replace(`/${getInitialLocale()}`)

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
    <div className="main_wrapper">
      <Layout title={'Home | Dignite Studio'} canonical="home" metaDesc="Dignite Studio crafts experiences for your digital needs.">
          <TextHeaderHome text={data.home.title} />
          <Project trans={trans} />
      </Layout>
    </div>
  );
}



export default Index