import React from "react";
import Week1 from "./week1";
import Week2 from "./week2";
import Week3 from "./week3";
import Week4 from "./week4";
import Week5 from "./week5";
import Week7 from "./week7";
import Week8 from "./week8";
import Week9 from "./week9";
import Week10 from "./week10";

import PrelimExam from "./prelimExam";
import {
  week1Items,
  week2Items,
  week3Items,
  week4Items,
  week5Items,
  prelimExam,
} from "../../data/dataPrelim";
import {
  week7Items,
  week8Items,
  week9Items,
  week10Items,
} from "../../data/dataMidterm";

function ITE() {
  return (
    <div>
      <div className="dropdownContainter dropdown w-100">
        <button
          className="dropdownButton btn btn-secondary fs-4 dropdown-toggle rounded-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Week No
        </button>
        <ul className="dropdown-menu w-100">
          <li>
            <a className="dropdown-item" href="#week1">
              Week 1
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week2">
              Week 2
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week3">
              Week 3
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week4">
              Week 4
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week5">
              Week 5
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week7">
              Week 7
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week8">
              Week 8
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week9">
              Week 9
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#week10">
              Week 10
            </a>
          </li>
        </ul>
      </div>
      <div id="week1">
        <Week1 week1Items={week1Items} weekNo="WEEK 1" />
      </div>
      <div id="week2">
        <Week2 week2Items={week2Items} weekNo="WEEK 2" />
      </div>
      <div id="week3">
        <Week3 week3Items={week3Items} weekNo="WEEK 3" />
      </div>
      <div id="week4">
        <Week4 week4Items={week4Items} weekNo="WEEK 4" />
      </div>
      <div id="week5">
        <Week5 week5Items={week5Items} weekNo="WEEK 5" />
      </div>
      <div id="prelimExam">
        <PrelimExam prelimExam={prelimExam} weekNo="Prelim" />
      </div>
      <div id="week7">
        <Week7 week7Items={week7Items} weekNo="WEEK 7" />
      </div>
      <div id="week8">
        <Week8 week8Items={week8Items} weekNo="WEEK 8" />
      </div>
      <div id="week9">
        <Week9 week9Items={week9Items} weekNo="WEEK 9" />
      </div>
      <div id="week10">
        <Week10 week10Items={week10Items} weekNo="WEEK 10" />
      </div>
    </div>
  );
}

export default ITE;
