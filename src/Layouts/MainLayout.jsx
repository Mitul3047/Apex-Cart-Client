import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import NavbarTop from "../components/NavBar/NavbarTop";


const MainLayout = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;