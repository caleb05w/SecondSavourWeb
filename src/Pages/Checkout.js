import React, { useState } from "react";
import CitrusCandies from "../assets/images/CitrusCandie.png";
import Button from "../Components/Button.js";
import SmallSegment from "../Components/SmallSegment.js";
import Boxes from "../assets/images/boxes.png";
import Boothing from "../assets/images/boothing.png";

function Checkout() {
  // State to hold the current text
  const [displayText, setDisplayText] = useState(
    <div className="">
      <h3 className="text-gray-600 mb-[2%]"> Nutrition </h3>
      <p>
        Nutritious, vitamin-filled, citrus delicacies hand-made from repurposed
        juiced oranges. Made to enjoy in class, on a drive, during study
        sessions, basically anywhere! Nutritious, vitamin-filled, citrus
        delicacies hand-made from repurposed juiced oranges. Made to enjoy in
        class, on a drive, during study sessions, basically anywhere!
      </p>
    </div>
  );
  const [selectedButton, setSelectedButton] = useState("Nutrition");

  // Function to update the text
  const handleTextChange = (text, button) => {
    setDisplayText(text);
    setSelectedButton(button);
  };

  return (
    <div className=" w-[95%] md:w-[95%] lg:w-[80%] m-auto mt-[15vh] md:mt-[9%] lg:mt-[9%]">
      <div className="flex flex-col md:flex-row lg:flex-row gap-[3vh] lg:gap-[1%]">
        <div className="group relative bg-[#0D6A3D] min-w-[40%] lg:max-h-[100%] md:max-h-[100%] max-h-[50vh] lg:h-auto rounded-[1rem] flex justify-center hover:bg-[#17B267] hover:cursor-pointer ease-in-out duration-300 shadow-lg">
          <img
            className="py-[5vw] px-[8vw] relative lg:object-contain object-scale-down top-3 group-hover:top-0 ease-in-out duration-300"
            src={CitrusCandies}
            alt="Our Delicious Product Citrus Candies"
          ></img>
        </div>

        <div className=" bg-[#E7D9BF] rounded-[1rem] p-[2rem] md:p-[3rem] lg:p-[3rem] flex flex-col md:min-w-[60%] lg:min-w-[60%] shadow-lg">
          <div className="h-full flex flex-col gap-[1rem] py-[0.5rem]">
            <h1 className=""> Citrus Candies </h1>
            <h3 className="text-gray-600"> 7.99 Per Package </h3>
            <p>
              Nutritious, vitamin-filled, citrus delicacies hand-made from
              repurposed juiced oranges. Made to enjoy in class, on a drive,
              during study sessions, basically anywhere!
            </p>
          </div>
          <Button text="Add to Cart" />
        </div>
      </div>

      <div className="">
        <div className="border-b-2 border-gray-600 my-[3%]"></div>

        <div className="flex justify-between lg:flex-row md:flex-row flex-col">
          <h2> Product Info</h2>
          <div className="flex flex-row gap-[2%] mt-[2vh] lg:mt-0 md:mt-0 min-w-[50%] md:justify-end lg:justify-end">
            <button
              onClick={() =>
                handleTextChange(
                  <div className="">
                    <h3 className="text-gray-600 mb-[2%]"> Nutrition </h3>
                    <p>
                      Nutritious, vitamin-filled, citrus delicacies hand-made
                      from repurposed juiced oranges. Made to enjoy in class, on
                      a drive, during study sessions, basically anywhere!
                      Nutritious, vitamin-filled, citrus delicacies hand-made
                      from repurposed juiced oranges. Made to enjoy in class, on
                      a drive, during study sessions, basically anywhere!
                    </p>
                  </div>,
                  "Nutrition"
                )
              }
              className={`w-fit rounded-[0.5rem] px-[1rem] py-[0.5rem] hover:cursor-pointer hover:text-white hover:bg-[#0D6A3D] ease-in-out duration-300
                            ${selectedButton === "Nutrition" ? "bg-[#0D6A3D] text-white" : "bg-[#E7D9BF]"}`}
            >
              <h3> Nutrition </h3>
            </button>

            <button
              onClick={() =>
                handleTextChange(
                  <div className="flex flex-col gap-[1.3rem]">
                    <h3 className="text-gray-600"> Ingredients </h3>

                    <div className="flex flex-col gap-[1%]">
                      <h3 className="text-gray-600">
                        {" "}
                        15 droplets of golden sugar{" "}
                      </h3>
                      <p>
                        Nutritious, vitamin-filled, citrus delicacies hand-made
                        from repurposed juiced oranges. Made to enjoy in class,
                        on a drive, during study sessions, basically anywhere!
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1%]">
                      <h3 className="text-gray-600"> 10 grams of protein </h3>
                      <p>
                        Nutritious, vitamin-filled, citrus delicacies hand-made
                        from repurposed juiced oranges. Made to enjoy in class,
                        on a drive, during study sessions, basically anywhere!
                      </p>
                    </div>
                  </div>,

                  "Ingredients"
                )
              }
              className={`w-fit rounded-[0.5rem] px-[1rem] py-[0.5rem] hover:cursor-pointer hover:text-white hover:bg-[#0D6A3D] ease-in-out duration-300
                                    ${selectedButton === "Ingredients" ? "bg-[#0D6A3D] text-white" : "bg-[#E7D9BF]"}`}
            >
              <h3>Ingredients</h3>
            </button>
            <button
              onClick={() =>
                handleTextChange(
                  <div className="flex flex-col gap-[3vh] lg:gap-[1%] lg:flex-row md:flex-row justify-between">
                    <div className="lg:max-w-[50%] h-[50%]">
                      <SmallSegment
                        Title={"Order Online"}
                        Text={
                          "At Second Savour, we're expanding our sustainability initiatives to engage people outside of our communities.  Join us in making a positive impact on our planet!"
                        }
                        ButtonText={"Browse Products"}
                        Image={Boxes}
                      />
                    </div>

                    <div className="lg:max-w-[50%] h-[50%]">
                      <SmallSegment
                        Title={"Visit our In Person Sales"}
                        Text={
                          "We create our product using eco-friendly resources, offering sustainable food products."
                        }
                        ButtonText={"View Locations"}
                        Image={Boothing}
                      />
                    </div>
                  </div>,

                  "Purchase"
                )
              }
              className={`w-fit rounded-[0.5rem] px-[1rem] py-[0.5rem] hover:cursor-pointer hover:text-white hover:bg-[#0D6A3D] ease-in-out duration-300
                                    ${selectedButton === "Purchase" ? "bg-[#0D6A3D] text-white" : "bg-[#E7D9BF]"}`}
            >
              <h3>Purchase</h3>
            </button>
          </div>
        </div>

        <div className="mt-[7%] flex flex-col gap-[1rem]">
          <p> {displayText} </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
