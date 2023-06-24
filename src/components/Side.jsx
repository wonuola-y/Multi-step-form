import React from "react";

function Side() {
  return (
    <div className="side flex flex-col justify-center items-center w-full my-10 ">
      <div className="flex w-full  text-white my-3">
        <div className=" flex justify-center w-4/12 items-center  text-white">
          <span className="border-solid text-sm  border-[1px] text-center text-off-white 
          hover:bg-lightblue
          hover:text-navy-blue
          cursor-pointer
          border-blue rounded-full w-1/3">
            1
          </span>
        </div>
        <div className="w-full uppercase font-sans">
          <em className="text-off-white font-light not-italic text-sm">
            Step 1
          </em>
          <h3 className="font-bold">Your info</h3>
        </div>
      </div>
      <div className="flex w-full  text-white my-3">
        <div className="flex justify-center items-center w-4/12 uppercase">
          <span className="border-solid  border-[1px] text-sm text-center border-blue rounded-full w-1/3
           hover:bg-lightblue
           hover:text-navy-blue
           cursor-pointer">
            2
          </span>
        </div>
        <div className="w-full uppercase">
          <em className=" text-off-white not-italic font-light text-sm">
            Step 2
          </em>
          <h3 className="font-bold"> Select Plan</h3>
        </div>
      </div>

      <div className="flex w-full  text-white my-3">
        <div className="w-4/12 items-center flex justify-center">
          <span className="border-solid text-sm border-[1px] text-center border-blue rounded-full w-1/3
           hover:bg-lightblue
           hover:text-navy-blue
           cursor-pointer">
            3
          </span>
        </div>
        <div className="w-full uppercase">
          <em className="text-off-white not-italic font-light text-sm">
            Step 3
          </em>
          <h3 className="font-bold">Add-ons</h3>
        </div>
      </div>

      <div className="flex w-full  text-white my-3">
        <div className="w-4/12 flex justify-center  items-center">
          <span className="border-solid  text-sm  border-[1px] text-center border-blue rounded-full w-1/3
           hover:bg-lightblue
           hover:text-navy-blue
           cursor-pointer">
            4
          </span>
        </div>
        <div className="w-full  uppercase">
          <em className="not-italic font-light text-off-white text-sm">
            Step 4
          </em>
          <h3 className="font-bold">Summary</h3>
        </div>
      </div>
    </div>

    // {/* <!-- Sidebar end -->
  );
}

export default Side;
