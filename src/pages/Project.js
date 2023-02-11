import React from 'react';
import { motion } from "framer-motion";
import { css } from '@emotion/css/macro';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';

const Project = () => {

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
            variants={content}>
            <InitialTransition />
            <Navbar />
            <motion.section className={style()} variants={title}>
                <div className="title">
                    <h1 className="work">WORK</h1>
                    <h2>PROJECT</h2>
                </div>
            </motion.section>
            <motion.section variants={title}><ProjectList /></motion.section>
            <Footer />
        </motion.div>
    )
}

export default Project

export const style = () => css`
    padding-top: 5rem;
    .title{
        display: block;
        h2{
            text-align: center;
            font-size: 4rem;
            color: crimson;
            z-index: 2;
        }
        .work{
            text-align: center;
            font-size: 6rem;
            color: #F3F3F3;
            letter-spacing: 10px;
            margin-bottom: -5.5rem;
            z-index: 1;
        }
    }


@media screen and (max-width:1000px) { 
    .title{
        h2{
            font-size: 3rem;
        }
        .work{
            font-size: 5rem;
            letter-spacing: 8px;
            margin-bottom: -4.5rem;
        }
    }
}

@media screen and (max-width:540px) {
    .title{
            h2{
                font-size: 2rem;
            }
            .work{
                font-size: 3.5rem;
                letter-spacing: 6px;
                margin-bottom: -3rem;
            }
        }
    
}
`