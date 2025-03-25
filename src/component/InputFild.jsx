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
        Submission Day:{" "}
        {/* <input
          id="day"
          placeholder="Enter Your Submit Day"
          name="day"
          required
          type="text"
        /> */}
        <select name="day" id="day">
          <option>Enter submission day</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
      </label>
      <label htmlFor="month">
        Submission Month:
        {/* <input
          id="month"
          placeholder="Type month sort name"
          name="month"
          type="text"
          required
        /> */}
        <select name="month" id="month" required>
          <option>Enter submission month</option>
          <option value="Jan">Jan</option>
          <option value="Feb">Feb</option>
          <option value="Mar">Mar</option>
          <option value="Apr">Apr</option>
          <option value="May">May</option>
          <option value="Jun">Jun</option>
          <option value="Jul">Jul</option>
          <option value="Aug">Aug</option>
          <option value="Sep">Sep</option>
          <option value="Oct">Oct</option>
          <option value="Nov">Nov</option>
          <option value="Dec">Dec</option>
        </select>
      </label>
      <label htmlFor="dyear">
        Submission Year:
        {/* <input
          required
          id="dyear"
          placeholder="Enter Your Submit Year"
          name="dyear"
          type="text"
        /> */}
        <select name="dyear" id="dyear">
          <option>Enter submission year</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
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
        Submitted To:
        <textarea
          placeholder="Enter address(Name, Discipline, University etc.)"
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
