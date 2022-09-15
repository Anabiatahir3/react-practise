import React from 'react';
import blogapp from "../assets/portfolio/blogapp.jpg";
import cryptoapp from "../assets/portfolio/cryptoapp.JPG"
import githubfinder from "../assets/portfolio/githubfinder.JPG";
import htmlcss from "../assets/portfolio/htmlcss.png";
import restapi from "../assets/portfolio/restapi.JPG";
import todoapp from "../assets/portfolio/todoapp.JPG";
import {BsCodeSlash} from "react-icons/bs";
import {MdEmojiFlags} from "react-icons/md";

const Projects = () => {
    const projects=[
        {
            id:1,
            src:blogapp,
            clink:"https://github.com/Anabiatahir3/Node-Basics",
        },
        {
            
            id:2,
            src:cryptoapp,
            clink:"https://github.com/Anabiatahir3/crypto-app",
            dlink:"https://storied-cactus-9a6fb3.netlify.app/",
    
        },
        {
            
            id:3,
            src:githubfinder,
            clink:"https://github.com/Anabiatahir3/Github-finder",
            dlink:"https://wizardly-cori-948a61.netlify.app/"
    
        },
        {
            
            id:4,
            src:htmlcss,
            clink:"https://github.com/Anabiatahir3/stack",

        },
        {
            
            id:5,
            src:restapi,
            clink:"https://github.com/Anabiatahir3/Node-Basics/tree/restful-api",

    
        },
        {
            
            id:6,
            src:todoapp,
            clink:"https://github.com/Anabiatahir3/todo-app",
            dlink:"https://lively-cat-b7e05b.netlify.app/",
    
        }
    ]
  return (
    <div name='projects' className="bg-gradient-to-r from-orange-500 to-yellow-600 text-black w-full md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-black'>Projects</p>
                <p className='py-6 '>Check out some of my work here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {projects.map(({id,src,clink,dlink})=>(
                    <div key={id} className='shadow-md shadow-black rounded-lg duration-200 hover:scale-105'>
                    <img className="rounded-md h-2/3 w-full" src={src} alt="" />
                    <div className='flex items-center justify-center'>
                    <a href={dlink} target="_blank" rel="noreferrer">
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl'><MdEmojiFlags/></button></a>
                    <a href={clink} target="_blank" rel="nonreferrer">
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-2xl z-0 relative'><BsCodeSlash/>
                        </button>
                
                    </a>
                </div>
                </div>
                ))}
            </div>    
        </div>
    </div>
  )
}

export default Projects;
