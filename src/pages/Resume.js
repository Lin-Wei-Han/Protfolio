import React from 'react';
import { motion } from "framer-motion";
import { css, cx } from "@emotion/css/macro";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../dist/scss/about.scss';
import personal from '../dist/image/Group.png';
/* import personalHigh from 'https://upload.cc/i1/2023/02/28/fKRCD1.png'; */
import SkillBar from '../components/SkillBar';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ServiceCard from '../components/ServiceCard';
import ServiceGA4, { GA_EVENT } from "../services/ga4.service";

const tabContent = {
    skill: "skill",
    edu: "edu",
    exp: "exp"
};

const Resume = () => {

    const [isBegin, setIsBegin] = React.useState(true);
    const [tabResumeContent, setTabResumeContent] = React.useState(tabContent.skill);

    const handleChangeContent = (tabResumeType) => setTabResumeContent(tabResumeType);

    const downloadCV = () => {
        ServiceGA4.event(GA_EVENT.download_cv);
    }


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

    React.useEffect(() => {
        setTimeout(() => setIsBegin(false), 2000)
    }, [isBegin])

    React.useEffect(() => {
        ServiceGA4.init()
    }, []);

    return (
        <>
            <Navbar />
            <motion.div
                initial="initial"
                animate="animate"
                variants={content}
                className={style()}>
                {isBegin ? <InitialTransition /> : ""}
                <motion.div
                    variants={title}
                    className="title">
                    <h1 className="work">ABOUT</h1>
                    <h2>RESUME</h2>
                </motion.div>
                <motion.div className='about-content'>
                    <motion.section className="about-left">
                        <motion.img className="personal" variants={title} src={personal} alt="" />
                    </motion.section>
                    <motion.section variants={title} className="about-right">
                        <h1 className="title">John Lin</h1>
                        <h5 className="secondary">21 years / Taiwanese / Web developer / Data analyst </h5>
                        <p className="intro">從事網頁前端開發已有兩年經驗，熟悉HTML、CSS、Javascript...等語言，
                            並具備React框架開發能力。在網頁風格設計上，喜歡加入Animation元素，增加畫面精緻度。</p>
                        <p className="intro">同時，熟悉R、SAS、Python數據分析。喜歡透過視覺化的方式，呈現數據，
                            讓用戶更清楚的知道數據變動的意義。具備資料探勘、機器學習、統計分析、網路爬蟲、創建模型...等技術。</p>
                        <div className="button">
                            <div class="button-cv" onClick={() => downloadCV()}>DOWNLOAD CV</div>
                        </div>
                    </motion.section>
                </motion.div>
            </motion.div>
            <section className={resume()}>
                <h1 className='resume-title'>RESUME</h1>
                <div className='resume-button-container'>
                    <div className='resume-content-button'>
                        <div className={cx("resume-button", tabResumeContent === tabContent.skill ? "active" : "")}
                            onClick={() => { handleChangeContent(tabContent.skill); ServiceGA4.event(GA_EVENT.resume_skill); }}>SKILL</div>
                        <div className={cx("resume-button", tabResumeContent === tabContent.edu ? "active" : "")}
                            onClick={() => { handleChangeContent(tabContent.edu); ServiceGA4.event(GA_EVENT.resume_education); }}>EDUCATION</div>
                        <div className={cx("resume-button", tabResumeContent === tabContent.exp ? "active" : "")}
                            onClick={() => { handleChangeContent(tabContent.exp); ServiceGA4.event(GA_EVENT.resume_experience); }}>EXPERIENCE</div>
                    </div>
                </div>
                <div className='resume-content'>
                    {tabResumeContent === tabContent.skill ? <SkillBar /> :
                        tabResumeContent === tabContent.edu ? <Education /> :
                            tabResumeContent === tabContent.exp ? <Experience /> : ""}
                </div>
            </section>
            <motion.section variants={title} className={service()}>
                <h1 className='resume-title'>SERVICES</h1>
                <ServiceCard />
            </motion.section>
            <Footer />
        </>
    )
}

export default Resume

const style = () => css`
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

.about-content{
    display: grid;
    grid-template-columns: 40fr 60fr;
}

.about-left{
    img.personal{
        display: block;
        margin: 3rem auto ;
        text-align: center;
        width:60%;   
        z-index: 3;  

    }
}

.about-right{
    margin: 4rem 2rem;
    width: 90%;
    .title{
        font-size: 32px;
        color: crimson;
        margin: 1rem 0 0 0;
    }
    .secondary{
        font-size: 22px;
    }
    p{
        font-size: 20px;
        margin:2rem 0;
    }
}

.button{
    text-align: right;
    margin:  3rem 2rem 2rem 0;
    .button-cv{
        display: inline;
        margin-top: 1rem;
        padding: 10px;
        font-size: 20px;
        font-weight: 500;
        border-radius: 10px;
        color: crimson;
        border: 3px solid crimson;
        cursor: pointer;
        transition: 0.5s ease;

        &:hover{
            color: #ffffff;
            background-color: crimson;
        }
    }
}

@media screen and (max-width:1200px) { 
    .about-content{
        .about-left{
            img.personal{
                width: 80%;   
            }
        }
    
        .about-right{
            .secondary{
                font-size: 20px;
            }
            p{
                font-size: 18px;
            }
        }
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

@media screen and (max-width:768px) { 
    .about-content{
        .about-left{
            img.personal{
                width: 90%;   
            }
        }

        .about-right{
            .secondary{
                font-size: 18px;
            }
            p{
                font-size: 16px;
            }
        } 
        .button{
            margin:  1rem 1rem 1rem 0;
            .button-cv{
                padding: 7px;
                font-size: 14px;
            }
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

    .about-content{
        grid-template-columns: 1fr;
        .about-left{
            img.personal{
                width: 75%;
            }
        }

        .about-right{
            margin-top: 0;
            .secondary{
                font-size: 18px;
            }
            p{
                font-size: 16px;
            }
        }
    } 
}
`

const resume = () => css`
    margin-top:2rem;
    
    .resume-title{
        text-align: center;
        font-size: 4rem;
        color:crimson;
    }
    .resume-button-container{
        display: block;
        margin: 0 auto;
        width: 30%;
        .resume-content-button{
            display: flex;
            justify-content: space-evenly;
            margin: 3rem 0;
            .resume-button{
                color: crimson;
                background: #FFFFFF;
                border: 3px solid #DC143C;
                border-radius: 25px;
                padding:5px 8px ;
                cursor: pointer;
                &:hover,&.active{
                    color: white;
                    background: crimson;
                    transition: 0.5s ease ; 
                }
            }
        }
    }
    .resume-content{
        width: 80%;
        margin: 5rem auto;
    }

@media screen and (max-width:1200px) { 
    .resume-button-container{
        width: 45%;
    }
}
@media screen and (max-width:1000px) { 
    .resume-title{
        font-size: 3rem;
    }
}

@media screen and (max-width:920px) { 
    .resume-content{
        width: 95%;
    }
    .resume-button-container{
        width: 50%;
    }
}
@media screen and (max-width:768px) { 
    .resume-button-container{
        width: 70%;
    }
}
@media screen and (max-width:540px) {
    .resume-button-container{
        width: 90%;
    }
    .resume-title{
        font-size: 2.5rem;
    }
}

@media screen and (max-width:400px) {
    .resume-button-container{
        width: 95%;
    }
    .resume-button-container{
        display: block;
        margin: 0 auto;
        width: 95%;
        .resume-content-button{
            display: flex;
            justify-content: space-evenly;
            margin: 3rem 0;
            .resume-button{
                font-size:13px;
                padding:5px 8px ;
            }
        }
    }
}

`

const service = () => css`
    margin: 10rem 0;
    .resume-title{
        text-align: center;
        font-size: 4rem;
        color:crimson;
    }

@media screen and (max-width:1000px) { 
    .resume-title{
        font-size: 3rem;
    }
}
@media screen and (max-width:540px) {
    .resume-title{
        font-size: 2.5rem;
    }
}

`