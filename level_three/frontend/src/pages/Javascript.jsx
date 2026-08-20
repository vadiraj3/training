/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Javascript = () => {
  //   var name = "Venugopal"; //can be redeclared aslo reassigned with old javascript version not for new vesion //
  //   console.log(name);
  //   var city = "Bangalore";
  //   city = "Ballari";
  //   console.log(city);

  //   let age = 25; // can not be redeclared and this is also reassingned
  //   age = 30;
  //   console.log(age);

  //   const country = "India"; // can not be redeclared and aslo reassingned.
  //   console.log(country);

  //   const [input, setInput] = useState("");
  //   const [result, setResult] = useState("Not Checked Yet");

  //   function grade(marks) {
  //     if (marks >= 90) {
  //       setResult("Grade A");
  //     } else {
  //       if (marks >= 80) {
  //         setResult("Grade B");
  //       } else {
  //         if (marks >= 50) {
  //           setResult("Grade C");
  //         } else {
  //           setResult("Fail");
  //         }
  //       }
  //     }
  //   }

  //   const [age, setAge] = useState("");
  //   const [year, setYear] = useState("Age Not Chacked");

  //   function years(age) {
  //     if (age >= 70) {
  //       setYear("Old age");
  //     } else {
  //       if (age >= 50) {
  //         setYear("Middle age");
  //       } else {
  //         if (age >= 25) {
  //           setYear("Young age");
  //         } else {
  //           setYear("Baby");
  //         }
  //       }
  //     }
  //   }

  // const [ans, setAns] = useState("");
  // const [grade, setGrade] = useState("");
  // const [sum, setSum] = useState("");

  // function plus(inputOne, inputTwo) {
  //   let result = Number(inputOne) + Number(inputTwo);
  //   setSum(result);
  // }

  // let day = 3;
  // switch (day) {
  //   case 1:
  //     console.log("Monday");
  //     break;

  //   case 2:
  //     console.log("Tuesday");
  //     break;

  //   case 3:
  //     console.log("wednesday");
  //     break;

  //   default:
  //     console.log("Invalid day");
  // }

  return (
    <div>
      {/* <input type="number" onChange={(e) => setAns(e.target.value)} />

      <input type="number" onChange={(e) => setGrade(e.target.value)} />

      <button onClick={() => plus(ans, grade)}>Check number</button>

      <h1>{sum}</h1> */}

      {/* <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => grade(input)}>Check Grade</button>

      <h1>{result}</h1> */}
      {/* <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={() => years(age)}>Check years</button>

      <h2>{year}</h2> */}
    </div>
  );
};

export default Javascript;
