
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
// import Nav from '../Components/Nav';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            {/* <Nav></Nav> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;