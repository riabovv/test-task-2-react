import './Courses.css';
import algorithms from './images/algorithms.webp';
import code from './images/code.webp';
import economics from './images/economics.webp';
import army from './images/army.webp';

const Courses = () => {
    return (
        <section className="courses">
                <div className="container">
                    <h5>ДОСТУПНІ КУРСИ</h5>
                    <span className="title-2">Запишіться прямо зараз на безкоштовні курси</span>
                    <div className="courses-items">
                        <div className="courses-item">
                            <div className="left">
                                <div className="item-title">
                                    <span>Основи програмування</span>
                                </div>
                                <div className="item-text">
                                    <p>
                                        After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                                        <a href="index.html">Read more ...</a>
                                    </p>
                                </div>
                                <div className="item-button">
                                    <a href="index.html">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={algorithms} alt="algorithms" />
                            </div>
                        </div>
                        <div className="courses-item">
                            <div className="left">
                                <div className="item-title">
                                    <span>Розробка та аналіз алгоритмів</span>
                                </div>
                                <div className="item-text">
                                    <p>
                                        After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                                        <a href="index.html">Read more ...</a>
                                    </p>
                                </div>
                                <div className="item-button">
                                    <a href="index.html">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={code} alt="code" />
                            </div>
                        </div>
                        <div className="courses-item">
                            <div className="left">
                                <div className="item-title">
                                    <span>Економіка для всіх</span>
                                </div>
                                <div className="item-text">
                                    <p>
                                        After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                                        <a href="index.html">Read more ...</a>
                                    </p>
                                </div>
                                <div className="item-button">
                                    <a href="index.html">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={economics} alt="economics" />
                            </div>
                        </div>
                        <div className="courses-item">
                            <div className="left">
                                <div className="item-title">
                                    <span>Історія України</span>
                                </div>
                                <div className="item-text">
                                    <p>
                                        After the first 50 completed projects to make a mistake with the deadlines almost unreal.
                                        <a href="index.html">Read more ...</a>
                                    </p>
                                </div>
                                <div className="item-button">
                                    <a href="index.html">ЗАРЕЄСТРУВАТИСЬ НА КУРС!</a>
                                </div>
                            </div>
                            <div className="right">
                                <img src={army} alt="army" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Courses;