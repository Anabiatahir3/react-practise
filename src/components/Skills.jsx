import React from 'react';
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";


const Skills = () => {
    const tech = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "orange-700",
          ref:"https://www.w3schools.com/html/",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "blue-500",
          ref:"https://www.w3schools.com/css/css_intro.asp",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "yellow-500",
          ref:"https://www.javascript.com/",
        },
        {
          id: 4,
          src: react,
          title: "React",
          style: "blue-600",
          ref:"https://reactjs.org/"
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "sky-400",
          ref:"https://tailwindcss.com/",
        },
        {
          id: 6,
          src: github,
          title: "GitHub",
          style: "black",
          ref:"https://github.com/"
        },
        {   
            id: 7,
          src: node,
          title: "Node",
          style: "green-400",
          ref:"https://nodejs.org/en/",

        }
      ];
  return (
<div name="skills" className='bg-gradient-to-l from-orange-500 to-yellow-600 text-black w-full h-screen'>
    <div className='w-full h-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center'>          
        <div>
            <p className='text-4xl font-bold border-b-4 border-black inline'>Skills</p>
            <p className='py-6'>Following are the technologies I have worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {tech.map(({id,title,src,style,ref})=>(
            <div  key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-${style}`}>
               <a href={ref} target="_blank" rel="nonreferrer"><img src={src} alt="" className="w-20 mx-auto"/></a> 
                <p>{title}</p>
            </div>
            ))}
        </div>

            
    </div>
</div>
  )
}

export default Skills