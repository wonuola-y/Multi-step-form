import React, { useState } from "react";
import Side from "./Side";
// import { useNavigate } from "react-router-dom";

function Field(props) {
  const { label, id, onChange, errorMessage, ...inputProps} = props
  return (
    <>
      <form className="w-10/12 my-5">
        <div className=" font-sans flex flex-col my-3 ">
          <label className=" text-navy-blue font-normal my-2" htmlFor="name">
            {label}
          </label>
          <input className="border-[1px] border-[#D6D9E6] rounded-lg  p-4 placeholder:placeholder-[#9699AA] placeholder:font-medium placeholder:text-12 " 
            {...inputProps} onChange={onChange}
          />
          <span className="text-red">{errorMessage}</span>
        </div>
      </form>
    </>
  );
}

function Form() {
  //form states
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const inputs = [
    {
      id: 1,
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "e.g John Doe",
      error: "Username should be 3-16 characters, and shouldn't contain any special",
      pattern: '/^[a-zA-Z\s]+$/',
      required: true

    },
    {
      id: 2,
      name: "email",
      label: "Email Address",
      type: "email",
      error: "Must be a vail email",
      pattern: '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/',
      placeholder: "e.g example@email.com",
      required: true
    },
    {
      id: 3,
      name: "tel",
      label: "Phone Number",
      type: "tel",
      error:"This field is required",
      pattern: '/^\d{3}-\d{3}-\d{4}$/',
      placeholder: "e.g 123 456 7890",
      required: true
    },
  ];
  const handleChange = (w) => {
    setValues({ ...values, [w.target.name]: w.target.value });
  };
  // const [nameError, setNameError] = useState("");
  // const navg = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
   
  }

  console.log(values);
  return (
    <div className="flex container p-5 w-11/12  rounded-lg bg-white">
      <div className="w-3/12  bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-no-repeat bg-cover rounded-lg ">
        <Side />
      </div>
      {/* <!-- Step 1 start --> */}
      <div className="w-7/12 font-sans py-10 pl-24">
        <h2 className=" font-bold text-3xl">Personal info</h2>
        <sub className="text-lg text-gray-400 ">
          Please provide your name, email address, and phone number.
        </sub>

        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Field
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
          
              
            />
          ))}

          <button
            type="submit"
            className="rounded bg-navy-blue text-white py-2 px-4 cursor-pointer"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
