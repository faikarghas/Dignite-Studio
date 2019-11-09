import React from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap'

import useTranslation from '../../../hooks/useTranslation'

const menuLy = ({listMenu,refs,refList,showModal}) => {
  const { locale, t } = useTranslation()

    return (
        <div className="menu" ref={refs} >
          <ul className="list-item">
            {listMenu.map((item,i)=>{
              if(item.klik){
                return(
                  <li key={item.id} ref={refList}><a onClick={showModal}>HIRE US</a></li>
                )
              } else if (item.linkweb){
                return (
                  <li key={item.id} ref={refList}><a href="https://store.dignitestudio.com/" target="_blank" rel="noopener">STORE</a></li>
                )
              } else {
                return(
                  <li key={item.id} ref={refList}><Link href={`/[langs]/${item.link}`} as={`${locale}/${item.link}`}><a>{item.nama}</a></Link></li>
                )
              }
            })}
          </ul>
        </div>
    )
}

export default menuLy
