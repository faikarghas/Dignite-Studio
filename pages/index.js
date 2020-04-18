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
      <div className="initloading_wrapper" style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"#ffba00",zIndex:100}}>
        <svg className="svg-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416.83 207.52">
          <g>
            <rect x="87.24" y="26.94" width="18.89" height="67.23"/>
            <rect x="270.25" y="27.04" width="19.01" height="67"/>
            <rect x="270.88" y="104.75" width="19.01" height="18.9"/>
            <rect x="270.88" y="138.25" width="19.01" height="67.29"/>
            <path className="a" d="M330.24,136.49c-21.68,0-31.67,15.58-31.71,35.12s10,35.68,31.67,35.68c20.17.41,31.22-15.86,31.23-35.39S350.88,136.49,330.24,136.49Zm-.36,51.23c-8.7,0-12.31-7.11-12.29-15.82s4.68-15.69,12.31-15.69c8,.21,12.32,7,12.32,15.69S338,187.9,329.88,187.72Z"/>
            <path className="a" d="M242,104.75v37.68a23.9,23.9,0,0,0-16.32-5.93c-18.87,0-26.72,17.72-27.6,35.22-1,19.6,10,35.06,27.57,35.79A22.24,22.24,0,0,0,242,201.72v3.83h19V104.75Zm-12.56,83.52c-8.7,0-12.58-7.19-12.57-16s5-16,12.58-16c8,.21,12.55,7.18,12.55,16S237.59,188.46,229.48,188.27Z"/>
            <path className="a" d="M181.72,101.92V27h-19v4A23.89,23.89,0,0,0,146.23,25c-18.87,0-26.72,17.72-27.6,35.22-1,19.6,10,35.06,27.57,35.79A22.24,22.24,0,0,0,162.71,90v11.87c-1,10.67-11.79,10.21-11.79,10.21-11.46-.08-11.62-11.46-11.62-11.46H120.54c1.29,30.33,31.33,28.67,31.33,28.67C182.56,127.46,181.72,101.92,181.72,101.92ZM150,76.74c-8.7,0-12.58-7.19-12.57-16s5-16,12.58-16c8,.21,12.55,7.18,12.55,16S158.11,76.93,150,76.74Z"/>
            <path className="a" d="M247.36,31.33c-17.18-14.08-32.83,0-32.83,0V27h-19V94h19V53.13c2.2-9.62,11.43-8.79,11.43-8.79a11.36,11.36,0,0,1,11.9,9.25V94h19V53.58C256.35,38.33,247.36,31.33,247.36,31.33Z"/>
            <path className="a" d="M137.63,200.67c17.18,14.08,32.83,0,32.83,0V205h19V138h-19v40.92a12.09,12.09,0,0,1-12.12,8.79c-11.13.08-11.2-9.25-11.2-9.25V138h-19v40.46C128.64,193.67,137.63,200.67,137.63,200.67Z"/>
            <path className="a" d="M342.56,43.31V27.57h-14V8.21h-19V27.57H300.3V43.31h9.29V70.59c1.63,23.21,19,23.46,19,23.46,5.28,1.07,13.87,0,13.87,0V75.39c-13.06,3.81-13.87-4.81-13.87-4.81V43.31Z"/>
            <path className="a" d="M118.23,154.75V139h-14V119.65h-19V139H76v15.73h9.29V182c1.63,23.21,19,23.46,19,23.46,5.28,1.07,13.87,0,13.87,0V186.83c-13.06,3.81-13.87-4.81-13.87-4.81V154.75Z"/>
            <path className="a" d="M415.19,63.8h1.63s1.81-37.72-31.87-38.72c0,0-23.85-1.62-30.25,25.94,0,0-7.87,34.87,22.23,44,0,0,30.79,8.33,38.63-24.92l-20-.17s-1.85,6.6-11.17,6.42c0,0-10.44.25-11.19-12.53h42ZM374.69,51s2.48-6.44,10.61-6.31c0,0,7.83-.41,9.75,6.31Z"/>
            <path className="a" d="M74.79,47.08C73.79,0,39,0,39,0H0V94.17H39C75.63,91.67,74.79,47.08,74.79,47.08Zm-17.92,0C55.63,75,39,75.25,39,75.25h-20V19.05H39C57.88,22,56.88,47.08,56.88,47.08Z"/>
            <path className="a" d="M0,177.33H19s-1,11.88,18.4,12.88c0,0,19.69,0,18.94-13.92,0,0,.54-5-8.4-7.52,0,0-24-2.94-33.69-6.87,0,0-9.88-4-11.71-15,0,0-3.54-17.75,9.33-28.17,0,0,20.15-15.85,44.48-4.54,0,0,16.27,6.13,17,26.31l-18.81.06s.56-12.75-15.12-14c0,0-14.94-1.25-18.62,11.25,0,0-1.81,7.56,5.94,10.13,0,0,4,1.42,13.29,2.71,0,0,27.79,2.08,32.79,14.79,0,0,11.42,21.56-12.83,36.25,0,0-19.56,11.44-43.81.63C16.19,202.33.06,196.15,0,177.33Z"/>
          </g>
        </svg>
      </div>

    </div>
  );
}


export default Index