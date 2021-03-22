import './Form.css';

const Form = () => {
    return (
        <section className="page-form">
        <div className="container">
            <h5>ЗАРЕЄСТРУЙСЯ ЗАРАЗ</h5>
        <span className="title-2">Та отримай задоволення від навчання</span>
        <form action="#">
            <input type="text" placeholder="Name:"/>
            <input type="email" placeholder="Email:"/>
            <button type="submit">Submit</button>
        </form>
        </div>
    </section>
    )
}

export default Form;