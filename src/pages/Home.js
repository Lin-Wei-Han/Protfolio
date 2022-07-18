import React from 'react';
import personal from '../dist/image/GOA00060-1.jpg';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';

const Home = () => {

    const blackBox = {
        initial: {
            height: "100vh",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                when: "afterChildren",
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const InitialTransition = () => {
        // Scroll user to top to avoid showing the footer
        React.useState(() => {
            typeof windows !== "undefined" && window.scrollTo(0, 0);
        }, []);

        return (
            <motion.div
                className="absolute z-50 flex items-center justify-center w-full bg-black"
                initial="initial"
                animate="animate"
                variants={blackBox}
                style={{ backgroundColor: "rgb(18, 18, 18)", position: "absolute", width: "100vw", zIndex: "50" }}
            >
            </motion.div>
        );
    };


    const content = {
        animate: {
            transition: { staggerChildren: 0.1, delayChildren: 0.8 },
        },
    };

    const title = {
        initial: { y: 30, opacity: 0.1 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.2, -0.05, 0.01, 0.9],
            },
        },
    };

    return (
        <>
            <motion.section className='section-home' >
                <InitialTransition />
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={content}
                    className='home-content'
                >
                    <motion.div variants={title} className='home-text'>
                        <Navbar />
                        <h1>I'm LIN WEI HAN</h1>
                        <h3>WED DEVELOPER</h3>
                        <p>Hi ! I'm John Lin.Wed developer with over one year of experience.
                            Focused on front-end develop , web design and Data Visualization.
                            Graduate from Tamkang University.
                        </p>
                        <button>Contact Me</button>
                    </motion.div>
                    <motion.img variants={title} className='personal-image' src={personal} alt="PersonalImage" />
                </motion.div>
            </motion.section>
        </>
    )
}

export default Home




