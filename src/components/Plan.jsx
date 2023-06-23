import React from "react";
import Side from "./Side";

function Plan() {
  return (
    <div>
      <Side />
      <div>
        <h3>Select your plan</h3>{" "}
        <em>You have the option of monthly or yearly billing</em>{" "}
        <div>
          <div className="card">Arcade $9/mo</div>
          <div className="card"> Advanced $12/mo</div>
          <div className="card">Pro $15/mo </div>
          <div></div>
          Monthly Yearly
        </div>
        <button>Go Back</button>
        <button> Next Step</button>
      </div>
    </div>
  );
}

export default Plan;
