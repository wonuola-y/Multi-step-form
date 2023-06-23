import React from "react";
import Side from "./Side";


function Home() {
  return (
    <>
      <Side />
      {/* <!-- Step 1 start --> */}
      <h2>Personal info</h2>
      <sub>Please provide your name, email address, and phone number.</sub>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="e.g. Stephen King"
      />
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
      />
      <label htmlFor="phone">Phone Number</label>
      <input type="tel" name="tel" id="tel" placeholder="e.g. +1 234 567 890" />
      <button>Next step</button>
      {/* <!-- Step 1 end -->





<!-- Step 4 start --> */}
      Finishing up Double-check everything looks OK before confirming.
      {/* <!-- Dynamically add subscription and add-on selections here --> */}
      Total (per month/year) Go Back Confirm
      {/* 
<!-- Step 4 end -->

<!-- Step 5 start --> */}
      Thank you! Thanks for confirming your subscription! We hope you have fun
      using our platform. If you ever need support, please feel free to email us
      at support@loremgaming.com.
      {/* <!-- Step 5 end --> */}
    </>
  );
}

export default Home;
