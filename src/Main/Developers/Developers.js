import './Developers.css';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import google_plus from './images/google-plus.png';
import daniel from './images/daniel.webp';
import nick from './images/nick.webp';
import william from './images/william.webp';
import sarah from './images/sarah.webp';

const Developers = () => {
    return (
        <section className="developers">
                <div className="container">
                    <h5>РОЗРОБНИКИ</h5>
                    <div className="developers-info">
                        <div className="developer-card">
                            <img src={daniel} alt="daniel" />
                            <span>Daniel Raynolds</span>
                            <p>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                            <ul className="developers-card-socials">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                                        <img src={google_plus} alt="google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="developer-card">
                            <img src={nick} alt="nick" />
                            <span>Nick Parson</span>
                            <p>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                            <ul className="developers-card-socials">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                                        <img src={google_plus} alt="google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="developer-card">
                            <img src={william} alt="william" />
                            <span>William Stanley</span>
                            <p>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                            <ul className="developers-card-socials">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                                        <img src={google_plus} alt="google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="developer-card">
                            <img src={sarah} alt="sarah" />
                            <span>Sarah Noel</span>
                            <p>After the first 50 completed projects to make a mistake with the deadlines almost unreal. After the first hundred projects to break the promises already impossible.</p>
                            <ul className="developers-card-socials">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                                        <img src={google_plus} alt="google-plus" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Developers;