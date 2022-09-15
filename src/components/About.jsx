import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-l from-orange-500 to-yellow-600 text-black"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          
        </p>

        <br />

        <p className="text-xl">
          "Everyday it gets a little easier. But doing it everyday is the hard part."<br/>
          Nothing has made more sense to me then the above line.
          It easily became the one thing I always abide by.
          And I am going to let you figure out where I picked it up from.
          It's for your own good!
        </p>
      </div>
    </div>
  );
};

export default About;