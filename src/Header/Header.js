import './Header.css';

const Header = () => {
    return (
        <header className="header-bgImage">
        <div className="container ">
            <div className="header-top">
                <div className="logo">
                    <a href="index.html">
                        <img src="logo.png" alt="logo" />
                    </a>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <a href="index.html" className="active">головна</a>
                        </li>
                        <li>
                            <a href="index.html">курси</a>
                        </li>
                        <li>
                            <a href="index.html">блог</a>
                        </li>
                        <li>
                            <a href="index.html">про проект</a>
                        </li>
                        <li>
                            <a href="index.html">реєстрація</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="header-title">
                <h1>БЕЗКОШТОВНІ ОНЛАЙН-КУРСИ</h1>
                <h2>ВІД ВИКЛАДАЧІВ ПРОВІДНИХ УНІВЕРСИТЕТІВ СВІТУ</h2>
            </div>
            <div className="header-form">
                <form action="#">
                    <input type="text" placeholder="Email:" className="form-email" />
                    <input type="password" placeholder="Password:" className="form-password" />
                    <button type="submit" className="form-submit">РОЗПОЧАТИ!</button>
                </form>
            </div>
        </div>
    </header>
    );
}

export default Header;