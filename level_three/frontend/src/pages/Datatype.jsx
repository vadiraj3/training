import React from "react";

const Datatype = () => {
  function grade(marks) {
    if (marks >= 90) {
      console.log("grade A");
    } else {
      if (marks >= 75) {
        console.log("grade B");
      } else {
        console.log("grade C");
      }
    }
  }
  return <div>datatype</div>;
};

export default Datatype;
