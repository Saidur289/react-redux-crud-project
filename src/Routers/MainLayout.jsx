import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <main>
           <Outlet></Outlet>
           </main>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;