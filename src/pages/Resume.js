import React from 'react';
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../dist/scss/about.scss';
import personal from '../dist/image/Group.png';

const skillInfo = [
    {
        name: "Python",
        className: "line python",
        amount: 60,
    },
    {
        name: "R",
        className: "line r",
        amount: 85,
    },
    {
        name: "SAS",
        className: "line sas",
        amount: 65,
    },
    {
        name: "React",
        className: "line react",
        amount: 65,
    },
    {
        name: "Javascript",
        className: "line js",
        amount: 60,
    },
    {
        name: "HTML",
        className: "line html",
        amount: 80,
    },
    {
        name: "CSS",
        className: "line css",
        amount: 75,
    },
    {
        name: "SCSS",
        className: "line scss",
        amount: 75,
    },
    {
        name: "Power BI",
        className: "line power",
        amount: 70,
    },

]

const Resume = () => {
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
        <>
            <Navbar />
            <motion.div
                initial="initial"
                animate="animate"
                variants={content}
                className="max-width-about">
                <InitialTransition />
                <motion.section className="about-left">
                    <motion.img className="personal" variants={title} src={personal} alt="" />
                </motion.section>
                <motion.section variants={title} className="about-right">
                    <h1 className="title">About Me</h1>
                    <h5 className="secondary">21 years / Taiwanese / Web developer / Data analyst </h5>
                    <p className="intro">從事網頁前端開發已有兩年經驗，熟悉HTML、CSS、Javascript...等語言，
                        並具備React框架開發能力。在網頁風格設計上，喜歡加入Animation元素，增加畫面精緻度。</p>
                    <p className="intro">同時，熟悉R、SAS、Python數據分析。喜歡透過視覺化的方式，呈現數據，
                        讓用戶更清楚的知道數據變動的意義。具備資料探勘、機器學習、統計分析、網路爬蟲、創建模型...等技術。</p>
                    <h1 className="title">My Skill</h1>
                    {skillInfo.map((item, index) => (
                        <div key={index} className="skill-bar">
                            <div className="bar-text">
                                <h1 className="text">{item.name}</h1>
                                <h1 className="amount">{item.amount}%</h1>
                            </div>
                            <div className={item.className}></div>
                        </div>
                    ))}
                    <div className="button">
                        <div class="button-cv">DOWNLOAD CV</div>
                    </div>
                </motion.section>
            </motion.div>
            <Footer />
        </>
    )
}

export default Resume
