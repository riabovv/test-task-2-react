import './Partners.css';
import arrow_back from './images/arrow-back.png';
import arrow_next from './images/arrow-next.png';
import cambridge from './images/cambridge.webp';
import harvard from './images/harvard.webp';
import mit from './images/mit.webp';
import ucla from './images/ucla.webp';

const Partners = () => {
    return (
        <section className="partners">
                <h5>ПАРТНЕРИ - ОСВІТНІ ЗАКЛАДИ</h5>
                <div className="slider">
                    <div className="button-prev">
                        <button>
                            <img src={arrow_back} alt="back" />
                        </button>
                    </div>
                    <div className="button-next">
                        <button>
                            <img src={arrow_next} alt="next" />
                        </button>
                    </div>
                    <div className="show">
                        <div>
                            <img src={cambridge} alt="cambridge" />
                            <span>Cambridge</span>
                        </div>
                        <div>
                            <img src={harvard} alt="harvard" />
                            <span className="active-slide">Harvard</span>
                        </div>
                        <div>
                            <img src={mit} alt="mit" />
                            <span>MIT</span>
                        </div>
                        <div>
                            <img src={ucla} alt="ucla" />
                            <span>UCLA</span>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Partners;