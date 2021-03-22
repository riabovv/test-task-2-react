import './Footer.css';
import facebook_blue from './images/facebook-blue.png';
import google_plus_blue from './images/google-plus-blue.png';
import twitter_blue from './images/twitter-blue.png';
import facebook_red from './images/facebook-red.png';
import google_plus_red from './images/google-plus-red.png';
import twitter_red from './images/twitter-red.png';

const Footer = () => {
    return (
        <footer>
        <span>Made with love by <a href="https://www.instagram.com/vadym_ryabov/" target="_blank" rel="noreferrer">Vadym Riabov</a></span>
        <span>Inspired by <a href="https://prometheus.org.ua/" target="_blank" rel="noreferrer">PROMETHEUS</a></span>
        <div className="footer-socials-blue">
            <ul>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <img src={twitter_blue} alt="twitter-blue" />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <img src={facebook_blue} alt="facebook-blue" />
                    </a>
                </li>
                <li>
                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                        <img src={google_plus_blue} alt="google-plus-blue" />
                    </a>
                </li>
            </ul>
        </div>
        <div className="footer-socials-red">
            <ul>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                        <img src={twitter_red} alt="twitter-red" />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                        <img src={facebook_red} alt="facebook-red" />
                    </a>
                </li>
                <li>
                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                        <img src={google_plus_red} alt="google-plus-red" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;