import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


    const navLink = <>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-orange-600 p-1 border border-orange-600 rounded mt-2' : 'font-bold'} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-orange-600 p-1 border border-orange-600 rounded mt-2' : 'font-bold'} to="/update">All Art & craft Items</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-orange-600 p-1 border border-orange-600 rounded mt-2' : 'font-bold'} to="/about">Add Craft Item</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? 'font-bold text-orange-600 p-1 border border-orange-600 rounded mt-2' : 'font-bold'} to="/contact">My Art&Craft List</NavLink></li>
    </>

    
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost  text-2xl font-bold text-orange-600">CraftersCove</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><a className="btn bg-orange-600 text-white">Login</a></Link>
                    <Link><a className="btn ml-2 bg-orange-600 text-white">Register</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;