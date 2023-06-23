import React from "react";

function Add() {
  return (
    <div>
      <div>
        <h3>Pick add-ons</h3>{" "}
        <em>Add-ons help enhance your gaming experiences.</em>{" "}
        <div>
          <div className="card">
            <input type="checkbox" />
            <div>
              <h4>Online Service</h4>
              <em> Access to multiplayer games </em>
              <span>+$1/mo</span>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" />
            <div>
              <h4>Larger storage</h4>
              <em> Extra 1TB of cloud save</em>
              <span>+$2/mo</span>
            </div>
          </div>
          <div className="card">
            <input type="checkbox" />
            <div>
              <h4>Customizable Profile </h4>
              <em> ECustom theme on your profile</em>
              <span>+$2/mo</span>
            </div>
          </div>
        </div>
        <button>Go Back</button>
        <button> Next Step</button>
      </div>
    </div>
  );
}

export default Add;
