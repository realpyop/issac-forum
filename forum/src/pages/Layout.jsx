import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {

    return (
        <div className='layout'>

            <div className='header-elements'>
                <div className='logo-title'>
                    <Link to="/"><img className="logo" src="../src/assets/issac-head.png" alt="Issac's head" /></Link>
                    <Link to="/"><h4>The Binding of Issac Forum</h4></Link>

                </div>
                <div className='navigation-buttons'>
                    <Link to="/"><button className="header-button"> Home </button></Link>
                    <Link to="/create-post"><button className="create-button"> Create New Post </button></Link>
                </div>
            </div>
            <Outlet />
        </div >
    )
}

export default Layout; 