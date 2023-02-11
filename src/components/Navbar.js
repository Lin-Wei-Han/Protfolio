import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { cx } from "@emotion/css/macro";

const page = [
    {
        name: "Home",
        url: "./",
    },
    {
        name: "Resume",
        url: "./resume",
    },
    {
        name: "Project",
        url: "./project",
    },
    {
        name: "Contact",
        url: "./contact",
    },
]

const Navbar = () => {
    const [barClass, setBarClass] = React.useState(false)

    const handleChangeBar = (index) => () => setBarClass(index);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <h1 className="title">Protfo<span>lio</span></h1>
                </div>
                <nav className="navbar">
                    <ul className={cx(barClass ? "active" : "")}>
                        {page.map((item, index) => (
                            <li href="#" key={index}><a href={item.url}>{item.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div className="menu-btn">
                {!barClass ? <HiMenu onClick={handleChangeBar(true)} /> :
                    <IoClose style={{ color: "white" }} onClick={handleChangeBar(false)} />}
            </div>
        </>
    )
}

export default Navbar
