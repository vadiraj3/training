/* eslint-disable no-unused-vars */
import { Button, InputLabel, Radio, Select } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [country, setCountry] = useState("");
  const [ischecked, setisChecked] = useState(false);

  const handelSkills = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handelReset = () => {
    setName("");
    setEmail("");
    setpassword("");
    setDate("");
    setGender("");
    setSkills([]);
    setCountry("");
    setisChecked(false);
  };

  const handelSubmit = () => {
    console.log(
      name,
      email,
      password,
      date,
      gender,
      skills,
      country,
      ischecked,
    );
  };

  return (
    <>
      <label htmlFor="name">Name : </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">email : </label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="password">Password : </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="dob">Date Of Birth : </label>
      <input
        type="date"
        name="dob"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <br />
      <br />
      <label>Gender :</label>
      <input
        type="radio"
        name="gender"
        value={"male"}
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      />
      Male
      <input
        type="radio"
        name="gender"
        value={"female"}
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <br />
      <br />
      <label htmlFor="hindu">Hindu</label>
      <input
        type="checkbox"
        value={"hindu"}
        checked={ischecked}
        onChange={(e) => setisChecked(e.target.checked)}
      />
      <br />
      <br />
      <label>Skills :</label>
      <input
        type="checkbox"
        name="skills"
        value="html"
        checked={skills.includes("html")}
        onChange={handelSkills}
      />
      HTML
      <input
        type="checkbox"
        name="skills"
        value="css"
        checked={skills.includes("css")}
        onChange={handelSkills}
      />
      CSS
      <input
        type="checkbox"
        name="skills"
        value="javascript"
        checked={skills.includes("javascript")}
        onChange={handelSkills}
      />
      JavaScript
      <br />
      <br />
      <label>Country : </label>
      <select
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="Selectcountry">Select country</option>
        <option value="india">INDIA</option>
        <option value="usa">USA</option>
        <option value="canada">CANADA</option>
      </select>
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
      <button onClick={handelReset}>Reset</button>
    </>
  );
};

export default Form;
