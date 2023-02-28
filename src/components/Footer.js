import React from 'react';
import { css } from "@emotion/css/macro";
import { BiCopyright } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className={style()}>
            <span>Created By <a href="./">Lin</a> | <BiCopyright className='copyRightIcon' /> 2023 All rights reserved.</span>
        </footer>
    )
}

export default Footer

export const style = () => css`
    background: #2D2C2C;
    padding: 2rem 23px;
    font-size: 22px;
    color: #fff;
    text-align: center;
    span a{
        color: crimson;
        text-decoration: none;
        transition: 0.5s ease ;        
        &:hover{
            color: white;
        }
    }
    .copyRightIcon{
        margin-bottom:-4px
    }

    @media screen and (max-width:540px) {
        font-size: 16px;
    }
`
