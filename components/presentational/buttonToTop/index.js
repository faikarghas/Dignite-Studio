import React, { useState } from 'react'
import * as Scroll from 'react-scroll'

const index = () => {

    const [imgUrl, setImgUrl] = useState('https://api.dignitestudio.com/images/image/totopw.png');

    function enter(params) {
        setImgUrl('https://api.dignitestudio.com/images/image/totop.png')
    }

    function leave(params) {
        setImgUrl('https://api.dignitestudio.com/images/image/totopw.png')
    }

    return (
        <Scroll.Link className="toTop" activeClass="active" to="top" duration={500} smooth={true} spy={true} onMouseEnter={enter} onMouseLeave={leave}>
            <img src={imgUrl} width="45%" height="45%" />
        </Scroll.Link>
    )
}

export default index