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
        <svg style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} version="1.0" xmlns="http://www.w3.org/2000/svg"
      width="289.000000pt" height="180.000000pt" viewBox="0 0 289.000000 180.000000"
      preserveAspectRatio="xMidYMid meet">
      <g transform="translate(0.000000,180.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M200 1230 l0 -290 145 0 c164 0 196 9 252 73 89 101 89 333 0 434
      -56 64 -88 73 -252 73 l-145 0 0 -290z m276 141 c63 -38 81 -147 39 -234 -23
      -48 -59 -67 -130 -67 l-55 0 0 160 0 160 58 0 c38 0 67 -6 88 -19z"/>
      <path d="M2050 1415 c0 -52 -1 -55 -25 -55 -24 0 -25 -3 -25 -60 0 -57 1 -60
      25 -60 23 0 25 -4 25 -47 1 -27 5 -79 10 -117 7 -57 14 -74 39 -100 27 -27 39
      -31 101 -34 l70 -4 0 66 0 66 -34 0 c-41 0 -46 10 -46 101 l0 69 40 0 40 0 0
      60 0 60 -40 0 -40 0 0 55 0 55 -70 0 -70 0 0 -55z"/>
      <path d="M1000 1348 c-51 -35 -82 -97 -88 -178 -5 -76 8 -128 45 -178 37 -50
      76 -65 150 -59 l63 5 0 -29 c0 -39 -40 -67 -76 -51 -13 7 -29 23 -36 37 -10
      23 -17 25 -75 25 -62 0 -63 0 -63 -28 0 -15 10 -48 23 -72 30 -62 82 -90 165
      -90 73 0 116 16 153 56 44 49 49 81 49 336 l0 239 -77 0 c-43 -1 -105 2 -138
      5 -52 5 -65 3 -95 -18z m154 -140 c37 -52 9 -138 -43 -138 -39 0 -64 31 -64
      80 0 25 7 48 18 60 25 27 70 26 89 -2z"/>
      <path d="M1537 1364 c-4 -4 -44 -7 -87 -5 l-80 2 0 -210 0 -211 65 0 65 0 0
      123 c0 139 10 167 60 167 53 0 60 -18 60 -161 l0 -129 71 0 71 0 -4 153 c-4
      170 -15 209 -71 249 -32 23 -134 38 -150 22z"/>
      <path d="M2422 1349 c-29 -15 -51 -36 -70 -68 -24 -40 -27 -56 -27 -131 0 -74
      3 -91 27 -130 35 -60 88 -90 161 -90 91 0 140 28 178 102 32 63 28 68 -50 68
      -46 0 -72 -4 -80 -14 -20 -23 -49 -25 -76 -4 -14 11 -25 24 -25 29 0 5 57 9
      131 9 l131 0 -7 53 c-13 97 -50 157 -112 183 -49 21 -131 18 -181 -7z"/>
      <path d="M720 1150 l0 -210 65 0 65 0 0 210 0 210 -65 0 -65 0 0 -210z"/>
      <path d="M1820 1150 l0 -210 65 0 65 0 0 210 0 210 -65 0 -65 0 0 -210z"/>
      <path d="M1650 785 l0 -105 -26 10 c-37 14 -101 12 -132 -4 -69 -36 -102 -103
      -102 -208 0 -82 20 -136 65 -181 35 -34 59 -41 127 -34 29 4 86 6 126 6 l72 0
      0 310 0 311 -65 0 -65 0 0 -105z m-28 -242 c37 -43 29 -120 -16 -141 -67 -30
      -117 86 -60 142 21 21 57 20 76 -1z"/>
      <path d="M1820 825 l0 -65 70 0 70 0 0 65 0 65 -70 0 -70 0 0 -65z"/>
      <path d="M348 850 c-115 -34 -172 -158 -120 -260 23 -47 65 -68 168 -86 115
      -19 134 -27 134 -59 0 -29 -33 -54 -81 -61 -41 -6 -100 21 -114 54 -9 19 -17
      22 -72 22 l-63 0 0 -34 c0 -62 68 -133 149 -156 101 -28 230 5 283 71 23 29
      31 50 34 95 9 102 -42 154 -170 174 -136 22 -165 39 -145 83 22 48 97 62 143
      26 14 -11 26 -29 26 -40 0 -17 7 -19 65 -19 l65 0 0 -40 c0 -38 2 -40 30 -40
      l30 0 0 -101 c0 -161 36 -209 158 -209 l62 0 0 65 0 65 -33 0 c-49 0 -57 14
      -57 102 l0 78 45 0 45 0 0 55 0 55 -45 0 -45 0 0 55 0 55 -65 0 -65 0 0 -55
      c0 -51 -2 -55 -23 -55 -18 0 -27 10 -43 48 -22 52 -66 92 -123 111 -39 13
      -133 13 -173 1z"/>
      <path d="M2094 681 c-138 -63 -141 -327 -5 -398 78 -41 190 -25 243 34 74 82
      67 265 -14 340 -50 47 -150 57 -224 24z m142 -146 c18 -28 15 -95 -6 -120 -17
      -20 -64 -19 -82 3 -32 36 -29 112 5 134 26 17 66 8 83 -17z"/>
      <path d="M972 526 c3 -183 7 -195 79 -244 29 -21 42 -23 94 -18 33 3 93 6 133
      5 l72 0 0 210 0 211 -65 0 -65 0 0 -128 c0 -112 -2 -131 -18 -145 -24 -22 -65
      -21 -85 1 -14 15 -17 41 -17 145 l0 127 -66 0 -65 0 3 -164z"/>
      <path d="M1820 480 l0 -210 70 0 70 0 0 210 0 210 -70 0 -70 0 0 -210z"/>
      </g>
      </svg>
      </div>
    </div>
  );
}



export default Index