import React,{useRef} from 'react';
import emailjs from "@emailjs/browser";
import {links} from "../helper.jsx"

const Contact = () => {
    const form = useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
  return (
    <div
    name="contact"
    className="w-full h-screen bg-gradient-to-r from-orange-500 to-yellow-600 p-4 text-black"
  >
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-black">
          Contact
        </p>
        <p className="py-6">Get in touch with me</p>
      </div>

      <div className=" flex-col justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className=" flex flex-col w-full md:w-1/2 ">
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Enter the subject"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mb-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            required
            className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
          ></textarea>

          <button type="submit" value="Send" className=" text-black bg-gradient-to-t from-yellow-400 to-yellow-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Send
          </button>
        </form>
        <div className='lg:hidden flex items-center justify-center'>{links.map(({child,href})=>(
          <a className="mr-2 active:scale-105 " href={href}>{child}</a>
        ))}</div>
      </div>    
      </div>
  </div>
  )
}

export default Contact