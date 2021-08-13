import React, { useState, useRef, useEffect } from "react";
import "./app.css";
import Form from "./components/Form";
function App() {
  const [Gdetails, setGDetails] = useState([
    { title: "Name", placeholder: "Enter Name", id: 0 },
    { title: "Age", placeholder: "Enter age", id: 1 },
    { title: "Email", placeholder: "Enter email", id: 2 },
    { title: "Mobile No.", placeholder: "Enter mobile number", id: 3 },
  ]);

  const [Pdetails, setPDetails] = useState([
    {
      title: "Education",
      placeholder:
        "Enter Education Status (University, Graduate, Post-Graduate)",
      id: 0,
    },
    {
      title: "University Name",
      placeholder: "Which university did you attend/attending",
      id: 1,
    },
    {
      title: "Title of study",
      placeholder: "Enter course you're enrolled in",
      id: 2,
    },
    { title: "Graduated on", placeholder: "When did you graduate?", id: 3 },
  ]);

  const [Edetails, setEDetails] = useState([
    {
      title: "Company Name",
      placeholder: "Where did you work earlier?",
      id: 0,
    },
    {
      title: "Position",
      placeholder: "Position at your ex-company",
      id: 1,
    },
    {
      title: "How many years did you attend the job?",
      placeholder: "Enter no. of years",
      id: 2,
    },
  ]);
  return (
    <div className="app">
      <div className="card">
        <h1>
          <u>CV Maker</u>
        </h1>
        <Form GDetails={Gdetails} PDetails={Pdetails} EDetails={Edetails} />
      </div>
    </div>
  );
}

export default App;
