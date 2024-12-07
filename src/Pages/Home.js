import React from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet
import lemonMan from "../assets/lemon_man.png";
import Team from "../assets/images/team.png";
import SmallSegment from "../Components/SmallSegment.js";
import Boxes from "../assets/images/boxes.png";
import Boothing from "../assets/images/boothing.png";
import New1 from "../assets/images/NewSticker.png";
import Packages from "../assets/images/Group742.png";
import Button from "../Components/Button.js";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div className="w-100% bg-[#FEF7E6] flex justify-center">
      <div className="flex flex-col gap-[10vh] min-h-fit w-[90%]">
        {/* Header Section */}
        <div className="p-[2%] flex flex-col lg:gap-0 gap-[1rem]">
          <h1 className="text-center font-bold">SECOND SAVOUR</h1>
          <h3 className="text-center mt-[1%]">
            A social enterprise that aims to combat food waste originating from
            excess produce
          </h3>
          <div className="lg:w-[30%] w-fit mt-[2%] mx-auto">
            <a href={"https://forms.gle/uMxvjKhRKX5Ecjvi9"}>
              <button className="flex justify-between rounded-[0.25rem] py-[1rem] px-[2rem] bg-green-800 text-white w-fit hover:bg-black hover:text-white hover:left-2 hover:shadow-2xl left-0 relative ease-in-out duration-300">
                <h3 className="mr-[1rem] hidden lg:flex w-fit">
                  {" "}
                  Sign up for our waitlist!{" "}
                </h3>
                <h3 className="mr-[1rem] relative lg:hidden">
                  {" "}
                  Join the waitlist!{" "}
                </h3>
                <div className="min-h-[100%] flex flex-col justify-around w-fit">
                  <FaArrowRight />
                </div>
              </button>
            </a>{" "}
          </div>
        </div>

        {/* Citrus Candies Section */}
        <div className="mt-[2%] p-[2%] bg-green-800 flex flex-col border-2 rounded-2xl lg:flex-row md:flex-row">
          <div className="text-center lg:w-[40%]">
            <div className="flex justify-center">
              <img src={New1} />
            </div>

            <h1 className="mt-[2%] font-bold text-white">Citrus Candies</h1>
            <h3 className="mt-[2%] text-2xl font-bold text-white">
              $6.99 Per Package
            </h3>
            <p className="mt-[2%] text-white">
              Nutritious, vitamin-filled, citrus delicacies hand-made from
              repurposed juiced oranges. Made to enjoy in class, on a drive,
              during study sessions - basically anywhere!
            </p>

            <div className="mt-[4%]">
              <Button text={"Check it out!"} clickTo={"/Shop"} />
            </div>
          </div>

          <div className="mt-[3%] flex justify-center lg:mt-0 lg:w-[60%]">
            <img src={Packages} alt="Packages" className="max-w-full" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-[2%] flex flex-col justify-between lg:flex-row">
          <div className="lg:w-[30%] p-[3%]">
            <h1 className="font-bold">44 kg+</h1>
            <p className="mt-[3%]">
              Of surplus and imperfect produce saved from waste last month
            </p>
          </div>
          <div className="lg:w-[30%] p-[3%]">
            <h1 className="font-bold">100+</h1>
            <p className="mt-[3%]">
              Packages donated last year to raise awareness
            </p>
          </div>
          <div className="lg:w-[30%] p-[3%]">
            <h1 className="font-bold">200+</h1>
            <p className="mt-[3%]">
              Packages donated in the last year to raise awareness
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-[2%] justify-between gap-[1%]">
          <div className="w-full md:w-[48%] h-auto mb-8">
            <SmallSegment
              Title={"Order Online"}
              Text={
                "At Second Savour, we're expanding our sustainability initiatives to engage people outside of our communities.  Join us in making a positive impact on our planet!"
              }
              ButtonText={"Browse Products"}
              Image={Boxes}
              clickTo={"/Shop"}
            />
          </div>

          <div className="lg:max-w-[50%] md:max-w-[50%] w-[100%] h-[50%]">
            <SmallSegment
              Title={"Visit our In Person Sales"}
              Text={
                "We create our product using eco-friendly resources, offering sustainable food products."
              }
              ButtonText={"View Locations"}
              Image={Boothing}
              clickTo={"/Map"}
            />
          </div>
        </div>
        <div className="border-t border-gray-300"></div>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[60%]">
            <h1>Our Story</h1>
            <p className="mt-[5%]">
              Second Savour was founded by a group of friends at Simon Fraser
              University (SFU) in Burnaby, BC, with a mission to create
              environmental change.
            </p>

            <a
              href="https://secondsavour.ca/about"
              className="flex lg:w-[50%] justify-between mt-[5%]"
            >
              <h3 className="h-[100%] flex flex-col justify-center text-gray-600">
                Learn More
              </h3>
              <div className="flex flex-col justify-center p-[0.755rem] bg-[#0D6A3D] rounded-[0.25rem] text-white">
                <FaArrowRight size="10px" />
              </div>
            </a>
          </div>

          <div className="lg:w-[40%]">
            <img src={Team} alt="the Second Savour Team at our first social" />
          </div>
        </div>

        <div className="border-t border-gray-300"></div>

        <div>
          <h1 className="text-center">JOIN THE MOVEMENT</h1>
          <p className="text-gray-600 text-center mt-[2%]">
            See what people are saying about our products
          </p>
          <p className="text-center text-gray-800 mt-[5%] font-medium italic">
            "Second Savour's candies are the perfect blend of flavor and
            sustainability. I can't get enough of them!"
          </p>
          <p className="text-gray-800 text-center mt-[2%]">- Angelina Chen</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
