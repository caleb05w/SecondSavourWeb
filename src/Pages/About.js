import React, { useState } from "react";
import Profile from "../Components/Profile.js";
import Caleb from "../assets/images/caleb.png";
import Arianna from "../assets/images/Arianna.png";
import Jessica from "../assets/images/Jessica.png";
import Team from "../assets/images/team.png";
import scroll1 from "../assets/images/scroll1.png";
import scroll2 from "../assets/images/scroll2.png";
import scroll3 from "../assets/images/scroll3.png";

import { FaArrowRight } from "react-icons/fa";

function About() {
  //button code to change the content of team

  const [selectImage, setSelectImage] = useState(
    <div className="flex flex-row justify-between w-[100%]">
      <Profile
        Name={"Caleb AAA Wu"}
        Role={"Project Coordinator"}
        Concentration={"SIAT x Beedie"}
        Image={Caleb}
        LinkedIn={"https://www.linkedin.com/in/caleb-wu1"}
        Instagram={"https://www.instagram.com/caleb_wu_/"}
      />

      <Profile
        Name={"Arianna Ha"}
        Role={"VP Marketing"}
        Concentration={"Beedie Concentration"}
        Image={Arianna}
      />

      <Profile
        Name={"Jessica Tandibrata"}
        Role={"Events Coordinator"}
        Concentration={"Beedie Concentration"}
        Image={Jessica}
      />
    </div>
  );

  const handleImage = (image) => {
    setSelectImage(image);
  };

  return (
    <div className="w-[100%] bg-[#FEF7E6] flex justify-center overflow-hidden">
      <div className="flex flex-col gap-[15vh] min-h-fit border-orange-400 border-5 text-center pt-[9%] w-[90%]">
        <section className="">
          <h1> ABOUT US </h1>
          <h3 className="mt-[1%]"> Meet the team behind the dream. </h3>
        </section>

        <section>
          <div className="flex justify-between flex-row w-[100%] gap-[5%]">
            <div className="text-left max-w-[40%] flex flex-col justify-between">
              <div className="flex flex-col gap-[1rem]">
                <p className="text-gray-600"> Aspiring Changemakers</p>
                <h1> MEET OUR TEAM </h1>
                <h3 className="mt-[1rem]">
                  {" "}
                  Meet the team who's second savour whos seconr savour, boddy
                  bodyt copy body copy
                </h3>
              </div>

              <div className="flex w-[50%] justify-between">
                <h3 className="h-[100%] flex flex-col justify-center text-gray-600">
                  {" "}
                  Questions? Reach out
                </h3>
                <div className="flex flex-col justify-center p-[0.755rem] bg-[#0D6A3D] rounded-[0.25rem] text-white">
                  <FaArrowRight size="10px" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-row h-[10%] justify-between w-[100%] gap-[2%] mb-[2%]">
                <button
                  onClick={() =>
                    handleImage(
                      <div className="flex flex-row justify-between w-[100%]">
                        <Profile
                          Name={"Darren Lau"}
                          Role={"Project Coordinator"}
                          Concentration={"SIAT x Beedie"}
                          Image={Caleb}
                          LinkedIn={"https://www.linkedin.com/in/caleb-wu1"}
                          Instagram={"https://www.instagram.com/caleb_wu_/"}
                        />

                        <Profile
                          Name={"Gailza Wijaya"}
                          Role={"VP Marketing"}
                          Concentration={"Beedie Concentration"}
                          Image={Arianna}
                        />

                        <Profile
                          Name={"Jessica Tandibrata"}
                          Role={"Events Coordinator"}
                          Concentration={"Beedie Concentration"}
                          Image={Jessica}
                        />
                      </div>
                    )
                  }
                >
                  <p>Sales Team </p>
                </button>

                <button
                  onClick={() =>
                    handleImage(
                      <div className="flex flex-row justify-between w-[100%]">
                        <Profile
                          Name={"Caleb Wu"}
                          Role={"Project Coordinator"}
                          Concentration={"SIAT x Beedie"}
                          Image={Caleb}
                          LinkedIn={"https://www.linkedin.com/in/caleb-wu1"}
                          Instagram={"https://www.instagram.com/caleb_wu_/"}
                        />

                        <Profile
                          Name={"Arianna Ha"}
                          Role={"VP Marketing"}
                          Concentration={"Beedie Concentration"}
                          Image={Arianna}
                        />

                        <Profile
                          Name={"Jessica Tandibrata"}
                          Role={"Events Coordinator"}
                          Concentration={"Beedie Concentration"}
                          Image={Jessica}
                        />
                      </div>
                    )
                  }
                >
                  <p>Marketing Team </p>
                </button>

                <button
                  onClick={() =>
                    handleImage(
                      <div className="flex flex-row justify-between w-[100%]">
                        <Profile
                          Name={"Caleb AAA Wu"}
                          Role={"Project Coordinator"}
                          Concentration={"SIAT x Beedie"}
                          Image={Caleb}
                          LinkedIn={"https://www.linkedin.com/in/caleb-wu1"}
                          Instagram={"https://www.instagram.com/caleb_wu_/"}
                        />

                        <Profile
                          Name={"Arianna Ha"}
                          Role={"VP Marketing"}
                          Concentration={"Beedie Concentration"}
                          Image={Arianna}
                        />

                        <Profile
                          Name={"Jessica Tandibrata"}
                          Role={"Events Coordinator"}
                          Concentration={"Beedie Concentration"}
                          Image={Jessica}
                        />
                      </div>
                    )
                  }
                >
                  <p>Logistics Team </p>
                </button>
              </div>

              <div> {selectImage} </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 gap-[5%]">
          <div className="text-left grid grid-col">
            <h1> WHAT'S SECOND SAVOUR </h1>
            <h3 className="mt-[1rem] text-gray-600"> Aspiring Changemakers </h3>
            <h3>
              Second Savour was founded by a group of friends at Simon Fraser
              University (SFU) with a mission to create and sustainable
              environmental change.
            </h3>
            <h3 className="text-gray-600"> Aspiring Changemakers </h3>
            <h3>
              We aimed to reduce supply chain waste by taking a different
              approach than companies that sell imperfect produce. We want to
              promote the use of the whole product and not leave waste. We do
              not dare to dream about a better world, we dare to enact the
              change.{" "}
            </h3>
          </div>

          <div className="scale-[1] hover:scale-[1.1] ease-in-out duration-300">
            <img src={Team} alt="the Second Savour Team at our first social" />
          </div>
        </section>

        <section className="p-0 overflow-hidden overflow-x-hidden">
          <div className="h-fit w-[100%] gap-[0.25rem] flex flex-row absolute m-0 left-0">
            <div className="">
              <img src={scroll1} alt="scroll1" />
            </div>
            <div className="">
              <img src={scroll2} alt="scroll2" />
            </div>
            <div className="">
              <img src={scroll3} alt="scroll3" />
            </div>
          </div>
          <div className="h-fit w-[100%]  flex flex-row opacity-0">
            <div className="">
              <img src={scroll1} alt="scroll1" />
            </div>
            <div className="">
              <img src={scroll2} alt="scroll2" />
            </div>
            <div className="">
              <img src={scroll3} alt="scroll3" />
            </div>
          </div>
          <div className="text-left flex flex-row mt-[4%] gap-[2%]">
            <h3>
              {" "}
              <p>Words</p> <br></br>At Second Savour, we focus on reducing waste
              and promoting sustainability by utilizing surplus produce. By
              reducing the need for additional resources to create new food, we
              contribute to conserving energy, water, and soil health.
              Sustainability is more than a goal for us—it's the way we operate
            </h3>
            <h3>
              {" "}
              <p>Team Bond</p> <br></br>At Second Savour, we believe that a
              strong team is built on genuine connections and shared
              experiences. Our team socials are more than just events; they're a
              chance to bond, unwind, and celebrate our collective efforts. Join
              us, and become part of a family that values camaraderie as much as
              our mission to be sustainable
            </h3>
          </div>
        </section>

        <section className="text-left">
          <div className=" w-[60%] flex flex-col gap-[1rem]">
            <p className="text-gray-600"> Aspiring Changemakers</p>
            <h1> THE VALUES THAT DRIVE US FORWARDS</h1>
          </div>

          <div className="grid grid-cols-3 gap-[1%] mt-[3%]">
            <div className="  min-h-[50vh] p-[2rem] rounded-[0.5rem] bg-[#F3892C] flex flex-col gap-[1rem]">
              <h2> Substainability </h2>
              <p>
                We create our vs using eco-friendly resources, offering
                sustainable food products.
              </p>
            </div>

            <div className="  min-h-[50vh] p-[2rem] rounded-[0.5rem] bg-[#0D6A3D] flex flex-col gap-[1rem]">
              <h2> Engagement </h2>
              <p>
                We aim to inspire and empower individuals to rethink food waste,
                motivating them to be part of the solution.
              </p>
            </div>
            <div className="  min-h-[50vh] p-[2rem] rounded-[0.5rem] bg-[#E7D9BF] flex flex-col gap-[1rem]">
              <h2> Repurpose </h2>
              <p>
                We repurpose surplus or unwanted produce into upcycled food
                products, reducing waste while raising awareness to address
                issues of hunger and inequality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
