import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const {user,photo,logOut}=useContext(AuthContext)
    // console.log(photo);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch((err)=>console.log(err.message))
    }

    const navItems=<>
    <li className="font-semibold"><Link>Home</Link></li>
    <li className="font-semibold"><Link>All Toys</Link></li>
    {
        user? <>
        <li className="font-semibold"><Link>My Toys</Link></li>
        <li className="font-semibold"><Link>Add A Toy</Link></li>
        <li className="font-semibold"><button onClick={handleLogOut}>Logout</button></li>
        </>:
       <li className="font-semibold"><Link to="/login">Login</Link></li>
    }
    </>

    return (
        <div className="navbar md:px-5 my-5 bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navItems}
            </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                <img className="w-10 pr-2 rounded" src="https://img.freepik.com/free-psd/3d-puzzle-pieces_23-2148938940.jpg?w=740&t=st=1684339483~exp=1684340083~hmac=5bdcd149aa80aa5d4ec329d36835fa569a1caa1742706050684c1e6fae4707de" alt="" />
                <span className="font-bold">ToyMan</span>
                </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navItems}
            </ul>
        </div>
        <div className="navbar-end">
            <div className="w-10 mr-2 rounded-full">
                <img src={photo?photo:'https://img.freepik.com/free-icon/man_318-233556.jpg?size=626&ext=jpg&ga=GA1.1.452690373.1680190369&semt=sph'} />
            </div>
            <a className="btn">Blogs</a>
        </div>
        </div>
    );
};

export default Navbar;