import React from "react";
import Side from "./Side";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
<div className="flex container p-5 w-11/12  rounded-lg bg-white">
<div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
  <Side />
</div>
      {/* <!-- Step 1 start --> */}
      <div className="w-7/12 font-sans py-10 pl-24">
      <h2 className=" font-bold text-3xl">Personal info</h2>
      <sub className="text-lg text-gray-400">Please provide your name, email address, and phone number.</sub>

     <form className="w-10/12 my-10">
      <div className=" font-sans flex flex-col my-5 ">
      <label  className=" text-navy-blue font-bold my-3" htmlFor="name">Name</label>
     <input 
     className=" font-sans p-5 border-[1px] border-navy-blue rounded-md"
       type="text"
       name="text"
       id="text"
       placeholder="e.g. Stephen King"
     />
      </div>
     <div className="flex flex-col my-5">
     <label className="text-navy-blue font-bold my-3" htmlFor="email">Email Address</label>
     <input 
     className=" font-sans p-5 border-[1px] border-gray  rounded-md"
       type="email"
       name="email"
       id="email"
       placeholder="e.g. stephenking@lorem.com"
     />
     </div>
     <div className="flex flex-col my-5">
     <label className="text-navy-blue font-bold my-3" htmlFor="phone">Phone Number</label>
     <input 
     className=" font-sans p-5 border-[1px] border-navy-blue rounded-md" type="tel" name="tel" id="tel" placeholder="e.g. +1 234 567 890" />
      
     </div>
     
     </form>
<Link >
<button className="rounded  bg-navy-blue text-white py-2 px-4">Next step</button></Link>
      </div>
   
</div>
    </>
  );
}

export default Home;
