import React from "react";
import RandomizedSentence from "./RandomizedSentence";
import { week1Items } from "../../data/data";

function ITE() {
  return (
    <div>
      <RandomizedSentence week1Items={week1Items} />
    </div>
  );
}

export default ITE;
