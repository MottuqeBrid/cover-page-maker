import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import bottom from "./bottom.png";
import dataBar from "./dataBar.png";
import logo from "./logo.png";
import "./CoverPage.css"; // Ensure your CSS is correctly linked";

const CoverPageDownload = ({ data }) => {
  //   console.log(data);
  const {
    submitToDetail,
    assignmentTitle,
    courseTitle,
    courseCode,
    name,
    id,
    year,
    term,
    day,
    month,
    dyear,
  } = data;
  const coverRef = useRef();
  const cover = useRef();

  const handleDownload = () => {
    cover.current.style.display = "block";
    html2canvas(coverRef.current, {
      scale: 0.6, // Lowering resolution even more
      logging: false,
      useCORS: true,
      backgroundColor: "#FFFFFF", // Ensures transparent areas are white
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 0.2);
      const pdf = new jsPDF("p", "mm", [210, 297]); // A4 size in mm
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight, "", "FAST");
      pdf.save(`${id}-${assignmentTitle}.pdf`);
      cover.current.style.display = "none";
    });
  };
  //   assignmentTitle: "",
  //   courseTitle: "",
  //   courseCode: "",
  //   name: "",
  //   id: "",
  //   year: "",
  //   term: "",
  //   professor: "",
  //   day: "",
  //   month: "",
  //   dyear: "",
  // ynth: "",
  // tnth: "",
  return (
    <div>
      <div
        ref={cover}
        style={{
          display: "none",
        }}
      >
        <div ref={coverRef} className="coverBody">
          <div className="circle"></div>
          <div className="logoName">
            <img src={logo} alt="Logo" />
            <h1>
              Khulna <span className="university">University</span>
            </h1>
          </div>
          <div className="titleBox">
            <div className="box"></div>
            <div className="ASSIGNMENT">ASSIGNMENT</div>
            <div className="on">ON</div>
            <div className="ASSIGNMENTtitle">{assignmentTitle}</div>
            <div className="courseTitleCode">
              <h1>Course Title: {courseTitle}</h1>
              <h1>Course Code: {courseCode}</h1>
            </div>
          </div>
          <table>
            <thead>
              <tr className="tHeading">
                <td>SUBMITTED BY</td>
                <td>SUBMITTED TO</td>
              </tr>
            </thead>
            <tbody>
              <tr className="tBody">
                <td>
                  NAME: {name.toUpperCase()} <br />
                  ID: {id} <br />
                  YEAR: {year[0]}
                  <sup>{year[1] + year[2]}</sup>, TERM: {term[0]}
                  <sup>{term[1] + term[2]}</sup>
                  <br />
                  Khulna University, Khulna
                </td>
                <td>{submitToDetail}</td>
              </tr>
            </tbody>
          </table>
          <div className="coverFooter">
            <img src={dataBar} alt="" />
            <p>Date of submission:</p>
            <h2>
              {month.toUpperCase()} {day}, {dyear}
            </h2>
          </div>
          {/* import bottom from "./bottom.png" */}
          <img className="bottomShape" src={bottom} alt="" />
        </div>
      </div>
      <button className="coverPageDownloadBtn" onClick={handleDownload}>
        Download Your Cover Page
      </button>
    </div>
  );
};

export default CoverPageDownload;
