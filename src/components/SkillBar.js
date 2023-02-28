import React from 'react';
import { css } from '@emotion/css/macro';

const SkillBar = () => {

    const webSkill = [
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

    ]

    const dataSkill = [
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
            name: "SQL",
            className: "line sql",
            amount: 30,
        },
        {
            name: "SAS",
            className: "line sas",
            amount: 65,
        },
        {
            name: "Power BI",
            className: "line power",
            amount: 70,
        },

    ]

    return (
        <div className={style()}>
            <div className='skill-left'>
                {webSkill.map((item, index) => (
                    <div key={index} className="skill-bar">
                        <div className="bar-text">
                            <h1 className="text">{item.name}</h1>
                            <h1 className="amount">{item.amount}%</h1>
                        </div>
                        <div className={item.className}></div>
                    </div>
                ))}
            </div>
            <div className='skill-right'>
                {dataSkill.map((item, index) => (
                    <div key={index} className="skill-bar">
                        <div className="bar-text">
                            <h1 className="text">{item.name}</h1>
                            <h1 className="amount">{item.amount}%</h1>
                        </div>
                        <div className={item.className}></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillBar

export const style = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .skill-left{
        .skill-bar{
            .bar-text .amount,.line::before{
                background-color: crimson;
            }
        }
    }

    .skill-right{
        .skill-bar{
            .bar-text .amount,.line::before{
                background-color: #006AA6;
            }
        }
    }

.skill-bar{
    margin: 1rem auto;
    width: 80%;
    .bar-text{
        display: flex;
        .text{
            font-weight: 500;
            font-size: 24px;
            margin-right: 3rem;
        }
        .amount{
            margin: auto 0;
            padding: 3px 10px;
            height: 15px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 20px;
            color: white;
        }
    }

    .line{
        margin: 0.8rem 0;
        height: 0.8rem;
        border-radius: 10px;
        width: 100%;
        background: lightgrey;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: 10px;
        }
    }
}

@media screen and (max-width:700px) { 
    grid-template-columns: 1fr;
}
`