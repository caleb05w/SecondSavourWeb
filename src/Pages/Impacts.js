import React from "react";
import "../output.css";
import "../input.css"; // Tailwind stylesheet

export default function Impacts() {
  return (
    <div>
      <div className="w-100% bg-[#FEF7E6] flex justify-center">
        <div className="flex flex-col gap-[10vh] min-h-fit w-[90%]">
          {/* Header Section */}
          <div className="p-[2%]">
            <h1 className="text-center font-bold">CURRENT IMPACTS</h1>
            <h4 className="text-center mt-[1%]">
              Here's how we're changing the community
            </h4>
          </div>

          <div className="mt-[5%] p-[3%] rounded-3xl bg-[#D2B48C]">
            <div>
              <h1>THIS YEAR, AT A GLANCE</h1>
              <h5 className="mt-[1%]">
                Shoot for the moon. Even if you miss, you'll land among the
                stars
              </h5>
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
          </div>

          <div className="mt-[2%] flex">
            <div className="flex flex-col justify-between w-[50%]">
              <div>
                <h4>Where we're venturing this year.</h4>
                <h2>NEW AREAS OF ENGAGEMENT</h2>
              </div>
              <h4 className="text-bottom">
                We make shit homemade. Shit so gas. Love it omg omgomgomgomgomg
                Seonc savourrrrr body
              </h4>
            </div>

            <div className="w-[50%] flex flex-wrap justify-between mx-auto">
              <div className="w-[50%] p-[1%]">
                <div className="h-[15rem] rounded-3xl p-[6%] bg-green-700">
                  <h3 className="font-bold">Sustainability</h3>
                  <p>
                    We create our products using eco-friendly resources,
                    offering systainable food products
                  </p>
                </div>
              </div>

              <div className="w-[50%] p-[1%]">
                <div className="h-[15rem] rounded-3xl p-[6%] bg-orange-400">
                  <h3 className="font-bold">Repurpose</h3>
                  <p>
                    We repurpose surplus or unwanted produce into upcycled food
                    products, reducing waste while raising awareness to address
                    issues of hunger and inequality.
                  </p>
                </div>
              </div>

              <div className="w-[50%] p-[1%]">
                <div className="h-[15rem] rounded-3xl p-[6%] bg-yellow-200">
                  <h3 className="font-bold">Engagement</h3>
                  <p>
                    We aim to inspire and empower individuals to rethink food
                    waste, motivating them to be part of the solution.
                  </p>
                </div>
              </div>

              <div className="w-[50%] p-[1%]">
                <div className="h-[15rem] rounded-3xl p-[6%] bg-[#D2B48C]">
                  <h3 className="font-bold">Repurpose</h3>
                  <p>
                    We repurpose surplus or unwanted produce into upcycled food
                    products, reducing waste while raising awareness to address
                    issues of hunger and inequality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[3%]">
            <div>
              <h1>PROJECTED FUTURE IMPACTS</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
