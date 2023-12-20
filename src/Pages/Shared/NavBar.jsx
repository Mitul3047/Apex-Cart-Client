import { Link } from "react-router-dom";
import { FaEnvelope, FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../assets/apex_cart.png'
const NavBar = () => {
    const navOptions = <>
        <Link to={'/'}><li className="mx-4">Home</li></Link>
        <Link to={'/'}><li className="mx-4">Maskura Hula Hoop</li></Link>
        <Link to={'/'}><li className="mx-4">Shop by Category</li></Link>
        <Link to={'/'}><li className="mx-4">Shark Shaver Pro</li></Link>
        <Link to={'/'}><li className="mx-4">Hot Sale</li></Link>
        <Link to={'/'}><li className="mx-4">Blog</li></Link>
    </>
    return (
        <div className="navbar justify-between text-white text-lg py-4 bg-black">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className="w-36" src={logo} alt="" /></a>
                <div className=" hidden lg:flex flex-grow">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>

            <div className="space-x-6 pr-6">
                <FaEnvelope />
                <FaUser />
                <FaSearch />
                <FaCartShopping/>

            </div>
        </div>
    );
};

export default NavBar;