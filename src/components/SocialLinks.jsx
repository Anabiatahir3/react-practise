import React from 'react';
import {links} from "../helper.jsx"
function SocialLinks() {
    
  return (
   <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
    <ul className=''>
        {links.map(({id,child,href,download,style})=>(
            <li key={id} className={'flex items-center w-40 h-14 px-4 bg-black text-yellow-400 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] mb-1'+ " "+ style}>
            <a className='flex justify-between items-center w-full' href={href} download={download} target='_blank' rel="noreferrer">{child} </a>
        </li>
        ))}
    </ul>
   </div>
  )
}

export default SocialLinks;