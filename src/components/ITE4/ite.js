import React from "react";
import Week1 from "./week1";
import Week2 from "./week2";
import Week3 from "./week3";
import Week4 from "./week4";
import Week5 from "./week5";
import PrelimExam from "./prelimExam";
import {
  week1Items,
  week2Items,
  week3Items,
  week4Items,
  week5Items,
  prelimExam,
} from "../../data/data";

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
            <a className="dropdown-item" href="#prelimExam">
              Prelim Exam
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
    </div>
  );
}

export default ITE;
