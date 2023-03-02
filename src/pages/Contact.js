import React from 'react';
import { motion } from "framer-motion";
import { css } from '@emotion/css/macro';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import emailjs from '@emailjs/browser';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import pin from '../dist/image/icon/pin.png';
import mail from '../dist/image/icon/mail.png';
import phone from '../dist/image/icon/phone-call.png';
import ServiceGA4, { GA_EVENT } from "../services/ga4.service";

const contactList = [
    {
        title: "ADDRESS",
        content: "Taiwan , New Taipei",
        img: pin
    },
    {
        title: "MAIL",
        content: "xcswap.john@gmail.com",
        img: mail
    },
    {
        title: "PHONE",
        content: "0968195596",
        img: phone
    },
]

const DEFAULT_FORM = {
    name: "",
    mail: "",
    subject: "",
    message: ""
}

const Contact = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [mail, setMail] = React.useState(DEFAULT_FORM);


    const form = React.useRef();

    const sendEmail = React.useCallback((e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                setMail(DEFAULT_FORM)
                if (result.text === "OK") {
                    enqueueSnackbar(`Send Mail Success!`, { variant: "success" });
                    ServiceGA4.event(GA_EVENT.send_mail);
                }
            }, (error) => {
                setMail(DEFAULT_FORM)
                enqueueSnackbar(`Send Mail Failed! ${error}`, { variant: "error" });
            });
    }, [enqueueSnackbar]);

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
        ServiceGA4.init()
    }, []);

    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={content}
            className={style()}>
            <motion.div
                className="absolute z-50 flex items-center justify-center w-full bg-black"
                initial="initial"
                animate="animate"
                variants={blackBox}
                style={{ backgroundColor: "rgb(18, 18, 18)", position: "absolute", width: "100vw", zIndex: "50" }}
            ></motion.div>
            <Navbar />
            <motion.section className="section-title" variants={title}>
                <div className="title">
                    <h1 className="work">MESSAGE</h1>
                    <h2>CONTACT</h2>
                </div>
            </motion.section>
            <motion.section className="section-contact" variants={title}>
                <div className="max-width">
                    <div className="contact-left">
                        {contactList.map((item, index) => (
                            <div className="wrapper" key={index}>
                                <img src={item.img} alt="" />
                                <div className="detail">
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                        <div className="social-media">
                            <a onClick={() => ServiceGA4.event(GA_EVENT.contact_fb)} href="https://www.facebook.com/profile.php?id=100004293253951"><BsFacebook className='media-icon' /></a>
                            <a onClick={() => ServiceGA4.event(GA_EVENT.contact_ig)} href="https://www.instagram.com/xcswap.john/"><AiFillInstagram className='media-icon ig' /></a>
                            <a onClick={() => ServiceGA4.event(GA_EVENT.contact_github)} href="https://github.com/Lin-Wei-Han"><AiFillGithub className='media-icon github' /></a>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form id="myForm" ref={form} onSubmit={sendEmail}>
                            <div className="fields">
                                <div className="field name">
                                    <TextField required fullWidth id="outlined-required" name="name" label="YOUR NAME" defaultValue=""
                                        value={mail.name}
                                        onChange={(e) => setMail({ ...mail, name: e.target.value })} />
                                </div>
                                <div className="field email">
                                    <TextField required fullWidth id="outlined-required" name="email" label="YOUR MAIL" defaultValue=""
                                        value={mail.mail}
                                        inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" }} //eslint-disable-line
                                        onChange={(e) => setMail({ ...mail, mail: e.target.value })} />
                                </div>
                            </div>
                            <div className="field-full">
                                <TextField required fullWidth id="outlined-required" name="subject" label="YOUR SUBJECT" defaultValue=""
                                    value={mail.subject}
                                    onChange={(e) => setMail({ ...mail, subject: e.target.value })} />
                            </div>
                            <div className="field-full textarea">
                                <TextField required fullWidth multiline id="outlined-required" name="message" label="YOUR MESSAGE" defaultValue="" type="email"
                                    value={mail.message}
                                    onChange={(e) => setMail({ ...mail, message: e.target.value })} />
                            </div>
                            <div className="button-area">
                                <Button style={{ background: "#dd0c39" }} variant="contained" endIcon={<SendIcon />}
                                    type="submit">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.section>
            <Footer />
        </motion.div>
    )
}

export default Contact

export const style = () => css`

.section-title{
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
}

.section-contact{
    height: 64.5vh;
    .max-width{
        display: grid;
        grid-template-columns: 1fr 1fr;
        .contact-left{
            padding: 2rem;
            .wrapper{
                display:flex;
                justify-content: left;
                margin: 2em auto;
                width: 300px;
                img{
                    width: 3rem;
                    margin-right: 2rem;
                }
                .detail{
                    p{
                        font-size: 20px;
                    }
                }
            }
            .social-media{
                display: flex;
                justify-content: space-evenly;
                margin: 3em auto;
                width: 200px;
                a{
                    margin:auto 0;
                }
                .media-icon{
                    width: 3rem;
                    height:3rem;
                    color: #a0a0a0;
                    transition: 0.3s ease;
                    &:hover{
                        color: #dd0c39;
                    }
                }
                .ig{
                    width: 3.5rem;
                    height:3.5rem;
                }
                .github{
                    width: 3.3rem;
                    height:3.3rem;
                }
            }
    
        }
        .contact-right{
            padding: 2rem;
            form{
                margin: 2em auto;
            }
            .field-full{
                width: 97.5%;
                padding: 0.5rem;
            }
            .fields{
                display:flex;
                width: 100%;
                .field{
                    width: 100%;
                    padding: 0.5rem;
                }
            }
            .MuiInputBase-multiline{
                height:25vh
            }
            .button-area{
                display: flex;
                align-items: center;
                justify-content: right;
                width: 99%;
            }
        }
    }    
}

@media screen and (max-width:1200px) {
    .section-contact{
        height: 64.5vh;
        .max-width{
            .contact-right{
            }
        }    
    }
    
}

@media screen and (max-width:928px) {
    .max-width{
        margin: auto 1rem;
    }
    .section-contact{
        .max-width{
            .contact-right{
                padding: 1rem;
                .field-full{
                    width: 96%;
                }
            }
        }    
    }
    
}

@media screen and (max-width:768px) { 
    .section-title{
        .title{
            h2{
                font-size: 3rem;
            }
            .work{
                font-size: 4rem;
                letter-spacing: 6px;
                margin-bottom: -4rem;
            }
        }
    }

    .section-contact{
        height: auto;
        .max-width{
            grid-template-columns: 1fr;
            .contact-right{
                padding: 2rem;
                .field-full{
                    width: 97.5%;
                }
            }
        }    
    }
}

@media screen and (max-width:540px) {
    .section-title{
        .title{
            h2{
                font-size: 2rem;
            }
            .work{
                font-size: 3rem;
                letter-spacing: 4px;
                margin-bottom: -3rem;
            }
        }
    }
    .section-contact{
        height: auto;
        .max-width{
            grid-template-columns: 1fr;
            .contact-left{
                width: auto;
                padding: 0;
                .wrapper{
                    width: 250px;
                    margin: 2rem auto;
                    .detail{
                        h1{
                            font-size: 20px;
                        }
                        p{
                            font-size: 14px;
                        }
                    }
                }
            }
            .contact-right{
                padding: 0rem;
                .fields{
                    display: block;
                    width: 97.5%;
                }
            }
        }    
    }
}


`
