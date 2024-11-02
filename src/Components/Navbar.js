import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <div className="w-[100%] pt-[1%] sm:mt-[2%]">
      <nav className="bg-transparent w-[100%] fixed z-10 flex flex-row justify-center mx-auto ">
        <div className="flex flex-row gap-[5%] w-fit justify-center whitespace-nowrap px-[3rem] py-[1rem] rounded-[0.5rem] bg-[#E7D9BF] shadow-lg">
          <a href="/shop">
            <h3 className="font-[Tanker] px-[1.7rem] py-[1rem] border-2 border-black w-fit text-black rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300">
              Our Products
            </h3>
          </a>
          <a href="/map">
            <h3 className="font-[Tanker] px-[1.7rem] py-[1rem] border-2 border-black w-fit text-black rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300">
              Our Locations
            </h3>
          </a>
          <a href="/about">
            <h3 className=" font-[Tanker] px-[1.7rem] py-[1rem] border-2 border-black w-fit text-black rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300">
              About Us
            </h3>
          </a>
        </div>
      </nav>

      <nav>
        <div class="w-100">
          <div className="flex flex-row justify-center border-2 border-black w-fit h-fit">
            <a href="/map">
              <h3 className="font-[Tanker] px-[1.7rem] py-[1rem] border-2 border-black w-fit text-black rounded-[0.5rem] hover:text-white hover:cursor-pointer hover:bg-[#0D6A3D] ease-in-out duration-300">
                Our Locations
              </h3>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
