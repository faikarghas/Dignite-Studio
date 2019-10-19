import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share'

const shareIcon = props => (
    <ul className="shareIcon">
        <li><FacebookShareButton url={props.url}><img src="../../../static/image/SocialIcon/Facebook.png" alt="icon-fb"/></FacebookShareButton></li>
        <li><LinkedinShareButton url={props.url}><img src="../../../static/image/SocialIcon/LinkedIn.png" alt="icon-linkedin"/></LinkedinShareButton></li>
        <li><TwitterShareButton url={props.url}><img src="../../../static/image/SocialIcon/twitter.png" alt="icon-twitter"/></TwitterShareButton></li>
    </ul>
)

export default shareIcon