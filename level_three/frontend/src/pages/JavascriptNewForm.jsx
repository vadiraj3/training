/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const JavascriptNewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [ischecked, setisChecked] = useState(false);
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState("");

  const handelSkills = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handelSubmit = () => {
    if (name === "") {
      console.log("Please enter name");
      return;
    }
    if (!email.includes("@")) {
      console.log("please add @ symbol");
      return;
    }
    if (password.length < 10) {
      console.log("please enter minimum 10 numbers");
      return;
    }
    if (!date) {
      console.log("please enter date of birth");
      return;
    }
    if (gender !== "male" && gender !== "female") {
      console.log("please select one gender");
      return;
    }
    if (skills.length === 0) {
      console.log("please select atleast on skills");
      return;
    }
    if (!country) {
      console.log("please select one country");
      return;
    }
  };

  const handelReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDate("");
    setGender("");
    setisChecked(false);
    setSkills([]);
    setCountry("");
  };

  const handelInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "inputname") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    if (e.target.name === "dob") {
      setDate(e.target.value);
    }
    if (e.target.name === "Male") {
      setGender(e.target.value);
    }
    if (e.target.name === "Female") {
      setGender(e.target.value);
    }
    if (e.target.name === "hindu") {
      setisChecked(e.target.checked);
    }
    if (e.target.name === "html") {
      handelSkills(e);
    }
    if (e.target.name === "css") {
      handelSkills(e);
    }
    if (e.target.name === "javascript") {
      handelSkills(e);
    }
    if (e.target.name === "country") {
      setCountry(e.target.value);
    }
  };

  return (
    <div>
      <label>Name : </label>
      <input type="text" name="inputname" value={name} onChange={handelInput} />
      <br />
      <br />
      <label>Email : </label>
      <input type="text" name="email" value={email} onChange={handelInput} />
      <br />
      <br />
      <label>Password : </label>
      <input
        type="text"
        name="password"
        value={password}
        onChange={handelInput}
      />
      <br />
      <br />
      <label>Date Of Birth : </label>
      <input type="date" name="dob" value={date} onChange={handelInput} />
      <br />
      <br />
      <label>Gender : </label>
      <input
        type="radio"
        name="Male"
        value={"male"}
        checked={gender === "male"}
        onChange={handelInput}
      />
      Male
      <input
        type="radio"
        name="Female"
        value={"female"}
        checked={gender === "female"}
        onChange={handelInput}
      />
      Female
      <br />
      <br />
      <label>Religion : </label>
      <input
        type="checkbox"
        name="hindu"
        value={ischecked}
        checked={ischecked}
        onChange={handelInput}
      />
      Hindu
      <br />
      <br />
      <label>Skills : </label>
      <input
        type="checkbox"
        name="html"
        value={"html"}
        checked={skills.includes("html")}
        onChange={handelInput}
      />
      HTML
      <input
        type="checkbox"
        name="css"
        value={"css"}
        checked={skills.includes("css")}
        onChange={handelInput}
      />
      CSS
      <input
        type="checkbox"
        name="javascript"
        value={"javascript"}
        checked={skills.includes("javascript")}
        onChange={handelInput}
      />
      JavaScript
      <br />
      <br />
      <label>Country : </label>
      <select name="country" value={country} onChange={handelInput}>
        <option value="">Select country</option>
        <option value="india">India</option>
        <option value="Usa">USA</option>
        <option value="uae">UAE</option>
      </select>
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
      <button onClick={handelReset}>Reset</button>
    </div>
  );
};

export default JavascriptNewForm;
