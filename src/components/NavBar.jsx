import { fromJSON } from 'postcss';
import React, {useState} from 'react';
import {FaBars,FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";



function NavBar() {
const [nav,setNav]=useState(false);

    const links=[
        {
            id:1,
            link:"home",
        },
        {
            id:2,
            link:"about",
        },
        {
            id:3,
            link:"projects",
        },
        {
            id:4,
            link:"skills",
        },
        {
            id:5,
            link:"contact",
        },

    ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-orange-500 bg-black fixed px-4 z-50">
        <div className='cursor-pointer'>
            <Link to="/"><h1 className='font-signature ml-2 text-bold text-5xl hover:text-yellow-400'>Anabia</h1></Link>
        </div>

        <ul className="hidden md:flex">
            {links.map(({ id , link })=>(
            <li key={id}
            className="px-4 text-orange-500 cursor-pointer capitalize font-large hover:scale-125  hover:text-yellow-400 duration 200" >
        <Link to={link} smooth duration={500}>{link}</Link></li>))}
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav? <FaTimes size={30}/>:<FaBars size={30}/>}    
        </div>
    {nav &&(
            <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-orange-500 text-yellow-500">
            {links.map(({link, id})=>(
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 hover:text-black">                
                <Link onClick={()=>setNav(!nav)}
                to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}   
        </ul>
    )}
        
    </div>
  )
}

export default NavBar;