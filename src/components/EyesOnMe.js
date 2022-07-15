// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function focus(event) {
    console.log("Good!");
  }
  function blur(event) {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onFocus={focus} onBlur={blur}>Eyes on me</button>
  );
}

export default EyesOnMe;