/* eslint-disable no-unused-vars */
import React from "react";

const JavaScriptClosure = () => {
  //   function outer() {
  //     let name = "Venugopal";

  //     function inner() {
  //       console.log(name);
  //     }
  //     inner();
  //   }
  //   outer();

  //   function outer() {
  //     let count = 0;

  //     return function () {
  //       count++;
  //       console.log(count);
  //     };
  //   }
  //   const counter = outer();
  //   counter();
  //   counter();
  //   counter();

  // function createCounter() {
  //   let count = 0;

  //   return {
  //     increment() {
  //       count++;
  //       console.log(count);
  //     },

  //     decrement() {
  //       count--;
  //       console.log(count);
  //     },
  //   };
  // }
  // const counter = createCounter();
  // counter.increment();
  // counter.increment();
  // counter.decrement();

  /////////////////////////////////////////////
  function outer() {
    let name = "venugopal";

    function inner() {
      console.log(name);
    }
    inner();
  }
  outer();

  return <div>JavaScriptClosure</div>;
};

export default JavaScriptClosure;
