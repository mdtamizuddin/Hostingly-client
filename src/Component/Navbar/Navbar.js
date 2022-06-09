import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Navbar = () => {

    return (
        <div className='container mx-auto'>
            <div className="navbar  bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavContent />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <NavContent />
                    </ul>
                </div>
                <div className="navbar-end ">
                    <Link to='/login' className="btn btn-nutral hidden lg:flex mb:flex btn-outline mr-5">Login</Link>
                    <Link to='/register' className="btn hidden lg:flex mb:flex btn-nutral">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar

const NavContent = () => {
    return (
        <>

            <li className='lg:mx-3 mx-0' tabindex="0">
                <button>
                    Hosting
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </button>
                <ul className="p-2">
                    <li><Link to='/'>Web Hosting</Link></li>
                    <li><Link to='/'>Cloud Hosting</Link></li>
                    <li><Link to='/'>WordPress Hosting</Link></li>
                    <li><Link to='/'>C Pannel Hosting</Link></li>
                </ul>
            </li>
            <li className='lg:mx-3 mx-0' tabindex="0">
                <button>
                    Domin
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </button>
                <ul className="p-2">
                    <li><Link to='/'>Doamin Checker</Link></li>
                    <li><Link to='/'>WHOIS Lookup</Link></li>
                    <li><Link to='/'>Doamin Transfer</Link></li>
                </ul>
            </li>
            <li className='lg:mx-3 mx-0'><Link to='/our-paln'>Our Plan</Link></li>
            <li className='lg:mx-3 mx-0'><Link to='/our-paln'>Support</Link></li>
            <li className='lg:mx-3 mx-0'><Link to='/our-paln'>About Us</Link></li>
            <Link to='/login' className="btn mt-3 lg:hidden btn-nutral btn-outline mr-5">Login</Link>
            <Link to='/register' className="btn btn-nutral mt-5 lg:hidden">Register</Link>
        </>
    )
}