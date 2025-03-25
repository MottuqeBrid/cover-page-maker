import "./App.css";
import CoverPageDownload from "./component/CoverPageDownload";
import { useState } from "react";
import InputFild from "./component/InputFild";

function App() {
  // const [assignmentTitle, setAssignmentTitle] = useState("");
  // const [courseTitle, setCourseTitle] = useState("");
  // const [courseCode, setCourseCode] = useState("");
  // const [name, setName] = useState("");
  // const [id, setId] = useState("");
  // const [year, setYear] = useState("");
  // const [term, setTerm] = useState("");
  // const [professor, setpProfessor] = useState("");
  // const [day, setDay] = useState("");
  // const [month, setMonth] = useState("");
  // const [dyear, setDYear] = useState("");
  const [loading, setLoading] = useState(true);
  // const document = {
  //   submitToDetail: "",
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
  // };
  const [data, setData] = useState({
    submitToDetail: "",
    assignmentTitle: "",
    courseTitle: "",
    courseCode: "",
    name: "",
    id: "",
    year: "",
    term: "",
    day: "",
    month: "",
    dyear: "",
  });
  const handleChange = (e) => {
    setData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
  };

  // const
  return (
    <>
      
      {loading ? (
        <div>
          <h1>Download Your cover Page</h1>
          <InputFild handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      ) : (
        <div>
          <h1>Your Cover Page is ready😊</h1>
          <CoverPageDownload data={data} />
        </div>
      )}
      <p>
        <small>This website can make mistakes. Check important info.</small>
      </p>
    </>
  );
}

export default App;
