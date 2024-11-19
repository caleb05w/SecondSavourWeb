import React from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet
import lemonMan from "../assets/lemon_man.png";
import SmallSegment from "../Components/SmallSegment.js";
import Boxes from "../assets/images/boxes.png";
import Boothing from "../assets/images/boothing.png";
import New1 from "../assets/images/NewSticker.png";
import Packages from "../assets/images/Group742.png";
import Button from "../Components/Button.js";

function Home() {
  return (
    <div className="w-100% bg-[#FEF7E6] flex justify-center">
      <div className="flex flex-col gap-[10vh] min-h-fit pt-[7%] w-[90%]">
        {/* Header Section */}
        <div className="p-[2%]">
          <h1 className="text-center font-bold">SECOND SAVOUR</h1>
          <h3 className="text-center mt-[1%]">
            A social enterprise that aims to combat food waste originating from excess produce
          </h3>
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

        <div className="flex">
          <div className="lg:w-[40%]">
            <h1>Our Story</h1>
            <p className="mt-[5%]">
              Second Savour was founded by a group of friends at Simon Fraser
              University (SFU) with a mission to create environmental change.
            </p>
          </div>

          <div className="w-[60%]">{/* insert image */}</div>
        </div>

        <div className="border-t border-gray-300"></div>

        <div>
          <h1 className="text-center">JOIN THE MOVEMENT</h1>
          <p className="text-gray-600 text-center mt-[2%]">
            See what people are saying about our products
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
