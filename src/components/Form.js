import React from "react";
import { useState, useRef } from "react";
import "../app.css";
import CV from "./CV";
import Loader from "./Loader";
const Form = (props) => {
  const { GDetails, PDetails, EDetails } = props;
  let [callCV, setCallCV] = useState(false);
  const [callLoader, setLoader] = useState(false);
  const gDetailsInput = useRef(new Array());
  const pDetailsInput = useRef(new Array());
  const eDetailsInput = useRef(new Array());

  const [GInputArr, setGInputArr] = useState([]);
  const [PInputArr, setPInputArr] = useState([]);
  const [EInputArr, setEInputArr] = useState([]);

  let arrG = [];
  let arrP = [];
  let arrE = [];

  function submitForm(e) {
    gDetailsInput.current.map((detail) => {
      arrG.push(detail.value);
    });
    setGInputArr(arrG);

    pDetailsInput.current.map((detail) => {
      arrP.push(detail.value);
    });
    setPInputArr(arrP);

    eDetailsInput.current.map((detail) => {
      arrE.push(detail.value);
    });
    setEInputArr(arrE);

    setLoader(true);
    e.target.parentElement.style.display = "none";
    setTimeout(() => {
      setLoader(false);
      setCallCV(true);
    }, 2000);
  }

  function hideBorder(e) {
    const scroll = e.target.scrollTop;
    if (scroll >= 120) {
      e.target.style.borderTop = `6px solid rgba(200, 200, 200, ${
        scroll / 625
      }) `;
    }
  }
  return (
    <div>
      {callLoader && <Loader />}
      {callCV && (
        <CV
          GLabel={GDetails}
          gDetails={GInputArr}
          PLable={PDetails}
          pDetails={PInputArr}
          ELable={EDetails}
          eDetails={EInputArr}
        />
      )}
      <div className="form-wrapper">
        <div className="main-form" onScroll={hideBorder}>
          <h2 className="sub-heading">General Details</h2>
          {GDetails.map((detail) => (
            <div className="details" key={detail.id}>
              <label>{detail.title}</label>
              <input
                type="text"
                placeholder={detail.placeholder}
                ref={(input) => gDetailsInput.current.push(input)}
              />
            </div>
          ))}
          <h2 className="sub-heading">Professional details</h2>
          {PDetails.map((detail) => (
            <div className="details" key={detail.id}>
              <label>{detail.title}</label>
              <input
                type="text"
                placeholder={detail.placeholder}
                ref={(input) => pDetailsInput.current.push(input)}
              />
            </div>
          ))}
          <h2 className="sub-heading">Experience</h2>
          {EDetails.map((detail) => (
            <div className="details" key={detail.id}>
              <label>{detail.title}</label>
              <input
                type="text"
                placeholder={detail.placeholder}
                ref={(input) => eDetailsInput.current.push(input)}
              />
            </div>
          ))}
        </div>
        <button className="submit-btn" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
