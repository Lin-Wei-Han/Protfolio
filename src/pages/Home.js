import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import textCloud from '../dist/image/personal_textcloud1.png';
import '../dist/scss/home.scss';

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
        initial: { y: 40, opacity: 0.1 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.2, -0.05, 0.01, 0.9],
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={content}
            className="max-width-home">
            <InitialTransition />
            <Navbar />
            <motion.section variants={title} className="section-info">
                <motion.section className="info-left">
                    <h1 className="web-title">WED DEVELOPER</h1>
                    <h5 className="web-info">Wed developer with over two year of experience. Focused on front-end develop and web design .</h5>
                </motion.section>
                <motion.section className="info-right">
                    <h1 className="data-title">DATA ANALYST</h1>
                    <h5 className="data-info">Data collection ,  cleaning and analysis . Focused on Machine Learning , Modeling and
                        data  visualization .</h5>
                </motion.section>
            </motion.section>
            <motion.img variants={title} className="banner" src={textCloud} alt="" />
        </motion.div>
    )
}

export default Home




