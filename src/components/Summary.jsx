import React from 'react'
import Side from './Side'
import { Link } from 'react-router-dom'
function Summary() {
  return (
    <>
    <div className="flex container p-5 w-11/12  rounded-lg bg-white">
   <div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
    <Side />
    </div>
    <div className="w-7/12 font-sans py-10 pl-24">
   <h3 className=" font-bold text-3xl">
       Finishing up
       </h3>
 <em className="text-gray not-italic text-sm">    Double-check everything looks OK before confirming</em>
      {/* <!-- Dynamically add subscription and add-on selections here --> */}
      <p> Nothing availble for now</p>
      Total (per month/year)
      <div className="flex justify-between mt-20">
        <Link to='/Add'>
        <button className="text-navy-blue">Go Back</button>
        </Link>
          <Link to='/Thanks'>
          <button className="bg-navy-blue rounded px-3 py-2 text-grayish-blue "> Confirm</button>
          </Link>
          </div>
   </div>
      
    </div>
    </>
  )
}

export default Summary