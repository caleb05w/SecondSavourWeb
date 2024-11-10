import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Profile({ Name, Role, Image, Concentration, LinkedIn, Instagram }) {
  return (
    <div className="group  border-2 border-black flex flex-col overflow-hidden w-[100%] rounded-[0.5rem] flex-1 flex-grow flex-shrink basis-[10rem] lg:h-fit max-h-[50vh]">
      <div className="rounded-[0.5rem] min-h-[100%] relative lg:w-full object-cover">
        <img
          src={Image}
          alt="Caleb Wu, Project Coordinator scale"
          className="group-hover:scale-[1.1] ease-in-out duration-300 group-hover:brightness-75 w-full"
        ></img>
        <div className="absolute inset-0 flex flex-col justify-end  w-full h-full p-[5%]">
          <div className=" max-h-full w-full text-left text-white ">
            <h3> {Name} </h3>
            <p className="font-thin mt-[5%]"> {Role} </p>
            <p className="font-thin"> {Concentration} </p>
            <div className="flex gap-[5%] mt-[5%]">
              <a href={LinkedIn}>
                <FaLinkedin
                  className="hover:cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </a>
              <a href={Instagram}>
                <FaInstagram
                  className="hover:cursor-pointer hover:brightness-50 ease-in-out duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
