/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const JavaScriptForm = () => {
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
      console.log("Please add @ symbol");
      return;
    }
    if (password.length < 8) {
      console.log("please enter atleast 8 letter or number");
    }
    if (date === "") {
      console.log("please enter date of birth");
      return;
    }
    if (gender !== "male" && gender !== "female") {
      console.log("please select gender");
      return;
    }
    if (skills.length === 0) {
      console.log("please select atlease one skills");
      return;
    }
    if (!country) {
      console.log("please select country");
      return;
    }
  };

  const handelReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDate("");
    setGender("");
    setisChecked("");
    setSkills([]);
    setCountry("");
  };

  const handelInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "nameinput") {
      setName(e.target.value);
    }
    console.log(e.target.name);
    if (e.target.name === "emailinput") {
      setEmail(e.target.value);
    }
    console.log(e.target.name);
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    console.log(e.target.name);
    if (e.target.name === "date") {
      setDate(e.target.value);
    }
    console.log(e.target.name);
    if (e.target.name === "male") {
      setGender(e.target.value);
    }
    console.log(e.target.name);
    if (e.target.name === "female") {
      setGender(e.target.value);
    }
    console.log(e.target.checked);
    if (e.target.name === "hindu") {
      setisChecked(e.target.checked);
    }
    console.log(e.target.name);
    if (e.target.name === "html") {
      handelSkills(e);
    }
    console.log(e.target.name);
    if (e.target.name === "css") {
      handelSkills(e);
    }
    console.log(e.target.name);
    if (e.target.name === "javascript") {
      handelSkills(e);
    }
    console.log(e.target.name);
    if (e.target.name === "country") {
      setCountry(e.target.value);
    }
  };

  return (
    <div>
      <label>Name : </label>
      <input type="name" name="nameinput" value={name} onChange={handelInput} />
      <br />
      <br />
      <label>Email : </label>
      <input
        type="email"
        name="emailinput"
        value={email}
        onChange={handelInput}
      />
      <br />
      <br />
      <label>Password : </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handelInput}
      />
      <br />
      <br />
      <label>Date Of Birth : </label>
      <input type="date" name="date" value={date} onChange={handelInput} />
      <br />
      <br />
      <label>Gender : </label>
      <input
        type="radio"
        name="male"
        value={"male"}
        checked={gender === "male"}
        onChange={handelInput}
      />
      Male
      <input
        type="radio"
        name="female"
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
        value={"hindu"}
        checked={ischecked}
        onChange={handelInput}
      />
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
      <select value={country} name="country" onChange={handelInput}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">Usa </option>
        <option value="uae">Uae</option>
      </select>
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
      <button onClick={handelReset}>Reset</button>
    </div>
  );
};

export default JavaScriptForm;
