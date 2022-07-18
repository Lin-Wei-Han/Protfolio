import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { IoMail } from 'react-icons/io5';
//import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    //頁面跳轉
    const clickToHome = () => {
        window.location.href = "./"
    }

    const clickToAbout = () => {
        //window.location.href = "./about"
    }

    const clickToProject = () => {
        // window.location.href = "./project"
    }

    const clickToContact = () => {
        //window.location.href = "./contact"
    }

    return (
        <>
            <div className='wrapper'>
                <div className='wrapper-content'>
                    <div className='button' onClick={clickToHome}>
                        <div className='icon'>
                            <i className='home'>
                                <AiFillHome style={{ marginTop: "10px", marginLeft: "2px" }} />
                            </i>
                        </div >
                        <span>Home</span>
                    </div >
                    <div className='button' onClick={clickToAbout}>
                        <div className='icon'>
                            <i className='about'>
                                <BsFillPeopleFill style={{ marginTop: "10px", marginLeft: "2px" }} />
                            </i>
                        </div>
                        <span>About</span>
                    </div>
                    <div className='button' onClick={clickToProject}>
                        <div className='icon'>
                            <i className='project'>
                                <MdWork style={{ marginTop: "10px", marginLeft: "2px" }} />
                            </i>
                        </div>
                        <span>Project</span>
                    </div>
                    <div className='button' onClick={clickToContact}>
                        <div className='icon'>
                            <i className='contact'>
                                <IoMail style={{ marginTop: "10px", marginLeft: "2px" }} />
                            </i>
                        </div>
                        <span>Contact</span>
                    </div>
                </div>
            </div >
            {/*             <div className='wrapper-menu' ref={navRef}>
                <nav>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/project'>Project</a>
                    <a href='/contact'>Contact</a>
                    <div className='nav-btn nav-close-btn' style={{ color: "black" }} onClick={showNavbar}><FaTimes /></div>
                </nav>
            </div >
            <div className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </div> */}
        </>
    )
}

export default Navbar
