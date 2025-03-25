import React from "react";

const InputFild = ({ handleChange, handleSubmit }) => {
  // title: "",
  // courseTitle: "",
  // courseCode: "",
  // name: "",
  // id: "",
  // year: "",
  // term: "",
  // professor: "",
  // day: "",
  // month: "",
  // dyear: "",

  return (
    <form className="coverForm" onChange={(e) => handleChange(e)}>
      <label htmlFor="name">
        Name:{" "}
        <input
          id="name"
          name="name"
          placeholder="Enter your Name"
          required
          type="text"
        />
      </label>
      <label htmlFor="id">
        ID:{" "}
        <input
          id="id"
          name="id"
          placeholder="Enter your student ID"
          required
          type="text"
        />
      </label>
      <label htmlFor="year">
        Year:
        {/* <input id="year" name="year" type="text" /> */}
        <select name="year" required>
          <option>Chose your Year</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>
      </label>
      <label htmlFor="term">
        Term:
        {/* <input id="term" name="term" type="text" /> */}
        <select name="term" required>
          <option>Chose your Term</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
        </select>
      </label>

      <label htmlFor="day">
        Submit Day:{" "}
        <input
          id="day"
          placeholder="Enter Your Submit Day"
          name="day"
          required
          type="text"
        />
      </label>
      <label htmlFor="month">
        Submit Month:
        <input
          id="month"
          placeholder="Type month sort name"
          name="month"
          type="text"
          required
        />
      </label>
      <label htmlFor="dyear">
        Submit Day of Year:{" "}
        <input
          required
          id="dyear"
          placeholder="Enter Your Submit Year"
          name="dyear"
          type="text"
        />
      </label>
      <label htmlFor="courseTitle">
        Course Title:{" "}
        <input
          id="courseTitle"
          placeholder="Enter Your Course Title"
          required
          name="courseTitle"
          type="text"
        />
      </label>
      <label htmlFor="courseCode">
        Course Code:{" "}
        <input
          id="courseCode"
          placeholder="Enter Your Course Code"
          required
          name="courseCode"
          type="text"
        />
      </label>
      <label htmlFor="assignmentTitle">
        Assignment Title:
        <textarea
          placeholder="Enter Your Assignment Title"
          id="assignmentTitle"
          name="assignmentTitle"
          type="text"
          required
        ></textarea>
      </label>
      <label htmlFor="submitToDetail">
        Submitted To Details:
        <textarea
          placeholder="Enter Your Submit Address"
          id="submitToDetail"
          name="submitToDetail"
          type="text"
          required
        ></textarea>
      </label>
      <input type="submit" onClick={(e) => handleSubmit(e)} value="Submit" />
    </form>
  );
};

export default InputFild;
