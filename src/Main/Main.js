import Advantages from './Advantages/Advantages';
import Courses from './Courses/Courses';
import Partners from './Partners/Partners';
import Developers from './Developers/Developers';
import Certificate from './Certificate/Certificate';
import './Main.css';
import Form from './Form/Form';




const Main = () => {
    return (
        <main>
            <Advantages />
            <Courses />
            <Partners />
            <Certificate />
            <Developers />
            <Form />
        </main>
    )
}

export default Main;