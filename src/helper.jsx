import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillFileEarmarkPersonFill} from "react-icons/bs";

export const links=[
    {
        id:1,
        child:(
            <>
        LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href:'https://linkedin.com ',
        style:'rounded-tr-md',
    },
    {
        id:2,
        child:(
            <>Github <FaGithub/></>
        ),
        href:'https://github.com/Anabiatahir3',
    },
    {
        id:3,
        child:(
        <>Mail <HiOutlineMail/></>
        ),
        href:'mailto:anabiatahir365@gmail.com',
        },
    {
        id:4,
        child:(
        <>Resume <BsFillFileEarmarkPersonFill/></>
        ),
        href:'/AnabiaTahir_resume.pdf',
        style:"rounded-br-md",
        download:true,
        }
    ]
