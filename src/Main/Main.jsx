import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className="h-[calc(100vh+385px)]">
             <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;