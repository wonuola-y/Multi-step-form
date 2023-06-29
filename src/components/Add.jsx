import React from "react";
import Side from "./Side";
import { Link } from "react-router-dom";
function Add() {
  return (
    <div className="flex container p-5 w-11/12  rounded-lg bg-white">
      <div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
<Side />
      </div>
      <div className="w-7/12 font-sans py-10 pl-24">

        <h3 className=" font-bold text-3xl">Pick add-ons</h3>{" "}
        <em className="text-gray not-italic text-sm">Add-ons help enhance your gaming experiences.</em>{" "}
        <div className="flex flex-col">
          <div className="card flex  border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue
          hover:bg-off-white  border-solid  rounded-lg px-4 py-5 my-5">
            <input type="checkbox" className="mx-5" />
            <div>
              <h4>Online Service</h4>
              <em> Access to multiplayer games </em>
              <span>+$1/mo</span>
            </div>
          </div>
          <div className=" card flex  border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue hover:bg-off-white border-solid  rounded-lg px-4 py-5 my-5">
            <input type="checkbox" className="mx-5" />
            <div>
              <h4>Larger storage</h4>
              <em> Extra 1TB of cloud save</em>
              <span>+$2/mo</span>
            </div>
          </div>
          <div className="card  flex  border-off-white border-[1px] hover:border-[1px] hover:border-navy-blue
          hover:bg-off-white  border-solid  rounded-lg px-4 py-5 my-5">
            <input type="checkbox" className="mx-5" />
            <div>
              <h4>Customizable Profile </h4>
              <em> ECustom theme on your profile</em>
              <span>+$2/mo</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-20">
        <Link to='/Plan'>
        <button className="text-navy-blue">Go Back</button>
        </Link>
          <Link to='/Summary'>
          <button className="bg-navy-blue rounded px-3 py-2 text-grayish-blue "> Next Step</button>
          </Link>
          </div>
      </div>
    </div>
  );
}

export default Add;
