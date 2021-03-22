import './Advantages.css';
import clock from './images/clock.svg';
import globe from './images/globe.svg';
import iphone from './images/iphone.svg';
import lyre from './images/lyre.svg';
import man from './images/man.svg';

const Advantages = () => {
    return (
        <section className="advantages">
                <div className="container">
                    <h5>ПЕРЕВАГИ</h5>
                <div className="advantages-items">
                    <div className="left">
                        <div className="item-top">
                            <object type="image/svg+xml" data={clock} width="200" height="200">
                                <img src={clock} alt="clock" />
                            </object>
                            <span>Будь-коли</span>
                            <p>Навчайтесь у зручний для Вас час. Відеолекції, тести та форум доступні цілодобово.</p>
                        </div>
                        <div className="item-bottom">
                            <object type="image/svg+xml" data={globe} width="200" height="200">
                                <img src={globe} alt="globe" />
                            </object>
                            <span>Будь-де</span>
                            <p>Проходьте курси, не виходячи з дому чи в дорозі. Все, що Вам знадобиться, – це доступ до інтернету.</p>
                        </div>
                    </div>
                    <div className="center">
                    <object type="image/svg+xml" data={lyre} width="200" height="200">
                        <img src={lyre} alt="globe" />
                    </object>
                    </div>
                    <div className="right">
                        <div className="item-top">
                        <object type="image/svg+xml" data={iphone} width="200" height="200">
                        <img src={iphone} alt="iphone" />
                        </object>
                            <span>Будь-який пристрій</span>
                            <p>Навчайтесь на комп’ютері, планшеті чи телефоні: сайт підлаштується під Ваш пристрій.</p>
                        </div>
                        <div className="item-bottom">
                        <object type="image/svg+xml" data={man} width="200" height="200">
                            <img src={man} alt="man"></img>
                        </object>
                            <span>Будь-хто</span>
                            <p>Наші курси абсолютно безкоштовні – захмарні ціни більше ніколи не стануть на заваді найкращій освіті.</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
    )
}

export default Advantages;