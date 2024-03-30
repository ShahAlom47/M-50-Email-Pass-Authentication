import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to={'/'}> <li><a>Home</a></li></NavLink>
                        <NavLink to={'/'} > <li><a>Item 1</a></li></NavLink>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">M50-Form-Authentication</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to={'/'}> <li><a>Home</a></li></NavLink>
                    <NavLink to={'/'} > <li><a>Item 1</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
               <Link to={'/login'}> <a className="btn btn-info">LogIn</a> </Link>
               <Link to={'/register'}> <a className="btn mx-4">Register</a> </Link>
            </div>
        </div>
    );
};

export default Navbar;