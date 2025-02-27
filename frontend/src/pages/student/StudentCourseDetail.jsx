import React from "react";

import courseImg from "../../assets/image.jpg";
import pieChart from "../../assets/pie-chart.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Doubts from "../../components/chat/Doubts";
import { Link } from "react-router-dom";
ChartJS.register(ArcElement, Tooltip, Legend);

function StudentCourseDetail() {
  const data = {
    labels: ["Ongoing", "Completed", "InComplete"],
    datasets: [
      {
        label: "# of Votes",
        data: [121, 67, 10],
        backgroundColor: ["pink", "lightblue", "lightgreen"],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Pie Chart",
      },
    },
  };
  return (
    <div className="teacher-view-course">
      <div className="right-content">
        <div className="course-details">
          <div className="course-right">
            <p id="course-t">Course Title:</p>
            <p id="ReactJS">ReactJS</p>
            <p id="Duration">Duration:</p>
            <p id="16Hours">16 Hours</p>
            <p id="Faculty">Faculty:</p>
            <p id="Science">Science</p>
            <p id="Teacher-name">Teacher Name:</p>
            <p id="Kamil-Khan">Kamil Khan</p>
          </div>
          <div className="course-img">
            <img src={courseImg} />
          </div>
        </div>
        <br />
        <div className="Description">
          <div className="desc">
            <p>Description:</p>
          </div>
          <div className="desc-deatail">
            <p>
              React is a powerful JavaScript library that you can use to build
              user interfaces for web and mobile applications (apps). In this
              course, you will explore the fundamental concepts that underpin
              the React library and learn the basic skills required to build a
              simple, fast, and scalable app.
            </p>
          </div>
        </div>
        <br />
       
        <div className="module-details">
          <div className="module-box first">
            <div className="fun-react">
              <div className="mod-text1">
                <p>Fundamentals of React JS</p>
              </div>
              <div className="module-time">
                <div className="module-seq">
                  <p>Module 1</p>
                </div>
                <div className="dot">
                  <p>.</p>
                </div>
                <div className="module-time">
                  <p>13 Minutes</p>
                </div>
              </div>
            </div>

            <div className="view-btn">
              <Link to='unitDetail/1/'>
                <button className="view-module-btn">View Module</button>
              </Link>
            </div>
          </div>
          <div className="module-box">
            <div className="mod-text">
              <div className="mod-text1">
                <p>Hooks</p>
              </div>
              <div className="module-time">
                <div className="module-seq">
                  <p>Module 2</p>
                </div>
                <div className="module-time">
                  <p>18 Minutes</p>
                </div>
              </div>
            </div>

            <div className="view-btn">
              <Link to='unitDetail/2/'>
                <button className="view-module-btn">View Module</button>
              </Link>
            </div>
          </div>
          <div className="module-box">
            <div className="mod-text3">
              <div className="mod-text1">
                <p>Virtaul DOM</p>
              </div>
              <div className="module-time">
                <div className="module-seq">
                  <p>Module 3</p>
                </div>
                <div className="module-time">
                  <p>15 Minutes</p>
                </div>
              </div>
            </div>

            <div className="view-btn">
              <Link to='unitDetail/3/'>
                <button className="view-module-btn">View Module</button>
              </Link>
            </div>
          </div>

          <div className="module-box last">
            <div className="mod-text4">
              <div className="mod-text1">
                <p>Final Test</p>
              </div>
              <div className="module-time">
                <div className="module-seq">
                  <p>Module 4</p>
                </div>
                <div className="module-time">
                  <p>20 Minutes</p>
                </div>
              </div>
            </div>

            <div className="view-btn">
              <Link to='finaltest/1/'>
                <button className="view-module-btn">Start Test</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="enroll-btn">
        <button className="enroll-module-btn btn btn-filled">Enroll</button>
        </div>
      </div>
      <div className="left-content">
        
        <Doubts />
      </div>
    </div>
  );
}

export default StudentCourseDetail;
