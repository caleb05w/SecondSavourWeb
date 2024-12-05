import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const [selectNavbar, setSelectNavbar] = useState();

  const handleNavBar = (navbar) => {
    setSelectNavbar(navbar);
  };

  return (
    <div className="w-[100%] sm:mt-[2%]">
      <nav className="bg-transparent w-[100%]  fixed z-20 lg:flex md:flex flex-row justify-center hidden">
        <div className="flex flex-row w-[70%] justify-between whitespace-nowrap px-[3rem] py-[1rem] rounded-[999rem] bg-[#E7D9BF] border border-[#cbba9a] shadow-lg">
          <a href="/">
            <h3 className=" font-[Tanker] w-fit text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
              Home
            </h3>
          </a>
          <div class=" flex flex-row gap-[1rem] w-fit">
            <a href="/shop">
              <h3 className="font-[Tanker] w-fit text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                Our Products
              </h3>
            </a>
            <a href="/map">
              <h3 className="font-[Tanker] w-fit text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                Our Locations
              </h3>
            </a>
            <a href="/about">
              <h3 className=" font-[Tanker] w-fit text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                About Us
              </h3>
            </a>
          </div>
        </div>
      </nav>

      {/* mobile navbar */}

      <nav>
        <div class="w-100  flex flex-col justify-items-end">
          <div className="lg:hidden md:hidden flex flex-row justify-center w-fit h-fit fixed pt-[5%] ease-in-out duration-300  z-10">
            <button
              onClick={() =>
                handleNavBar(
                  <div className="flex h-full flex-row justify-center w-full f-full">
                    <div className=" w-[100%] flex flex-row justify-center p-[1rem] fixed z-40 top-[20vh]">
                      <div className="flex flex-col gap-[1rem] min-w-[80%] justify-center whitespace-nowrap rounded-[0.5rem] px-[1rem] py-[1rem] bg-[#E7D9BF] shadow-lg">
                        <a href="/">
                          <h3 className="font-[Tanker] w-full text-center text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                            Home  
                          </h3>
                        </a>
                        
                        <a href="/shop">
                          <h3 className="font-[Tanker] w-full text-center text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                            Our Products
                          </h3>
                        </a>

                        <a href="/map">
                          <h3 className="font-[Tanker] w-full text-center text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                            Our Locations
                          </h3>
                        </a>
                        <a href="/about">
                          <h3 className=" font-[Tanker] w-full text-center text-black hover:cursor-pointer hover:underline ease-in-out duration-300">
                            About Us
                          </h3>
                        </a>
                        <button
                          onClick={() =>
                            handleNavBar(
                              // close state
                              <div className="top-50 ease-in-out duration-300"></div>
                            )
                          }
                        >
                          <div className="color-black"> Close </div>
                        </button>
                      </div>
                    </div>

                    <div className="min-w-[100vw] h-[100%] min-h-[100vh] bg-black fixed top-0 brightness-50 opacity-50 z-20"></div>
                  </div>
                )
              }
              // onClick={handleNavBar}
              className="flex text-3xl p-[0.7rem] w-fit text-black gap-[1rem] hover:cursor-pointer hover:underline ease-in-out duration-300 z-[50]"
            >
              {/* <h3>Menu</h3> */}
              <IoIosMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* create the function to toggle the navbar 
      const = [navbar, setNavbar] = useState(
        initial content
      )

      this allows us to feed the content from [ ] into useState, assigning the relationship

      create another function to toggle the states, toggleing is done through setNavbar, and navbar is the state.

      const handleNavBar = (navbarTemporary (argument)) => {
        setSelectNavbar(navbarTemporary)
      } 

      now navbar becomes a holder for the values that are initaited by it from handleNavbar.
       
      In this case, handleNavBar is a function that is used to switch the contents of navbar. This is done through setNavbar, which 
      switches the state of navbar with whatever value is entereded into it
      
      thats why when we use button onclick = () we feed it the function handleNavBar ( with the content we wnat show in it here ).*/}

      {selectNavbar}
    </div>
  );
}

export default Navbar;
