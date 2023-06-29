import React from "react";
import Side from "./Side";
import {Link} from 'react-router-dom'
import icons_advanced from "../assets/images/icon-advanced.svg";
import icons_arcade from "../assets/images/icon-arcade.svg";
import icons_pro from "../assets/images/icon-pro.svg";
function Plan() {
  return (
    <>
      <div className="flex container p-5 w-11/12  rounded-lg bg-white">
        <div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
          <Side />
        </div>
        <div className="w-7/12 font-sans py-10 pl-24">
          <h3 className=" font-bold text-3xl">Select your plan</h3>{" "}
          <em className="text-gray not-italic text-sm">
            You have the option of monthly or yearly billing
          </em>{" "}
          <div className="flex flex-col">
            <div className="flex justify-between  my-10">
              <div className="card flex flex-col border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue border-solid w-3/12 rounded-lg px-4 py-5">
                <img className="mb-8 w-2/5 " src={icons_arcade} alt="" />
                <b>Arcade </b>
                <span>$9/mo</span>
              </div>
              <div className="card flex flex-col border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue border-solid w-3/12 rounded-lg px-4 py-5">
                <img className="mb-8 w-2/5 " src={icons_advanced} alt="" /> <b>Advanced</b>{" "}
                <span>$12/mo</span>
              </div>
              <div className="card flex flex-col border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue border-solid w-3/12 rounded-lg px-4 py-5">
                <img className="mb-8 w-2/5 " src={icons_pro} alt="" />
                <b>Pro</b> <span>$15/mo</span>{" "}
              </div>
            </div>
            <div className="flex bg-grayish-blue py-4 justify-center"
            ><p>Monthly</p>
            <p className="mx-5">Toggle</p>
              <p>Yearly</p></div>
          </div>
          <div className="flex justify-between mt-20">
        <Link to='/'>
        <button className="text-navy-blue">Go Back</button>
        </Link>
          <Link to='/Add'>
          <button className="bg-navy-blue rounded px-3 py-2 text-grayish-blue "> Next Step</button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
