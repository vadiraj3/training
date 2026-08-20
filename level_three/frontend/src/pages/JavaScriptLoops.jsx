import React from "react";

const JavaScriptLoops = () => {
  // For Loop //
  //   for (let i = 1; i <= 5; i++) {
  //     console.log(i);
  //   }
  //   for (let i = 1; i <= 3; i++) {
  //     console.log(i);
  //   }
  //   for (let i = 5; i >= 1; i--) {
  //     console.log(i);
  //   }
  //   for (let i = 5; i > 2; i--) {
  //     console.log(i);
  //   }

  // While Loop //
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  return <div>JavaScriptLoops</div>;
};

export default JavaScriptLoops;
