import React from "react";
import Week1 from "./week1";
import Week2 from "./week2";
import { week1Items, week2Items } from "../../data/data";

function ITE() {
  return (
    <div>
      <Week1 week1Items={week1Items} />
      <Week2 week2Items={week2Items} />
    </div>
  );
}

export default ITE;
