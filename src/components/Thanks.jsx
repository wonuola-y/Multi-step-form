import React from 'react'
import Side from './Side'
import check from '../assets/images/icon-thank-you.svg'
function Thanks() {
  return (
  <>
  <div className="flex container p-5 w-11/12  rounded-lg bg-white">
<div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
<Side />
</div>
<div className='flex justify-center items-center text-center w-full'>
   <div className='max-w-lg flex justify-center items-center flex-col'>
   <img src={check} alt='Check' className='my-5'/>
<h1 className='font-bold text-3xl text-navy-blue'>Thank you!</h1>
<p className='text-gray my-5'>Thank you for confirming yoursbscription to oue platform. If you ever need support feel free to contact us at loremgaming.com </p>
   </div>
</div>
  </div>
  </>
  )
}

export default Thanks