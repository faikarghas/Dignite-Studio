import React,{useState} from 'react'
import Link from 'next/link'
import { Container,Row,Col } from 'react-bootstrap';
import {motion} from 'framer-motion'

import ThemeButton from '../../presentational/themeButton'

const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: .5, staggerDirection: -1 }
    },
    closed: {
      transition: { staggerChildren: 0.05 }
    },
    exit: {
      transition: { staggerChildren: 0.05 }
    },
};

const variants2 = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    },

};

const index = () => {
    const [mouse, setMouse] = useState([0,0,false]);
    const [mx, my, isActive] = mouse;
    return (
        <div className="nav_wrapper">
            <motion.ul className="nav_ul" variants={variants}>
                <motion.li variants={variants2}><Link href={`/about`}><a>About</a></Link><div className="linecross"></div></motion.li>
                <motion.li variants={variants2}><Link href={`/work`}><a>Projects</a></Link></motion.li>
                <motion.li variants={variants2}><Link href={`/blog`}><a>Blog</a></Link></motion.li>
                <motion.li variants={variants2}><a href="https://store.dignitestudio.com/" target="_blank" rel="noopener">Store</a></motion.li>
            </motion.ul>
        </div>
    )
}

export default index



