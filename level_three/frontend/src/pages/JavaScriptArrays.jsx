/* eslint-disable no-unused-vars */
import React from "react";

const JavaScriptArrays = () => {
  // let fruits = ["Banana", "Apple", "Orange"];
  // console.log(fruits);

  // let fruit = ["Grapes", "Pineaple", "Banana"];
  // console.log(fruit[0]);
  // console.log(fruit[1]);
  // console.log(fruit[2]);

  // let names = ["Venu", "Vadi", "Vasu"];
  // names[2] = "Sharath";
  // console.log(names);

  let fruits = ["banana", "apple", "grapes", "orange"];
  console.log(fruits.length);

  let fruit = ["appale", "banana"];
  fruit.push("orange");
  console.log(fruit);

  let names = ["vijay", "raghu"];
  names.unshift("venugopal");
  console.log(names);

  let goal = ["venu", "raghu", "vijay"];
  goal.pop();
  console.log(goal);

  let name = ["venu", "raghu", "vijay"];
  name.shift();
  console.log(name);

  let goals = ["Banana", "Apple", "Orange"];
  for (let goa of goals) {
    console.log(goa);
  }

  return <div></div>;
};

export default JavaScriptArrays;
