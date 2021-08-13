import React from "react";
import "../app.css";
import NoImage from "../assets/nopfp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const CV = (props) => {
  const { GLabel, gDetails, PLable, pDetails, ELable, eDetails } = props;
  const gCombined = GLabel.map((title, index) => ({
    title: title.title,
    input: gDetails[index],
    id: title.id,
  }));

  const pCombined = PLable.map((title, index) => ({
    title: title.title,
    input: pDetails[index],
    id: title.id,
  }));

  const eCombined = ELable.map((title, index) => ({
    title: title.title,
    input: eDetails[index],
    id: title.id,
  }));

  return (
    <div>
      <div className="cv-wrapper">
        <div className="cv-content">
          <div className="header">
            <h1>
              <u>Curriculum vitae</u>
            </h1>
          </div>
          <div className="cv-container">
            <div className="side-bar">
              <img src={NoImage} className="avatar" alt="profilepic" />
              <h4>
                <u>General Info</u>
              </h4>
              <h4>
                <FontAwesomeIcon icon={faGlobe} />
                <span> </span>Company: xyzcompany.com
              </h4>
              <h4>
                <FontAwesomeIcon icon={faUsers} />
                <span> </span>Position: xyz position
              </h4>
              <h4>
                <u>Location</u>
              </h4>
              <h4>
                <FontAwesomeIcon icon={faGlobeAsia} />
                <span> </span>Country: lorem ipsum
              </h4>
              <h4>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span> </span>City: lorem
              </h4>
              <h4>
                <FontAwesomeIcon icon={faHospital} />
                <span> </span>Nearby: lorem
              </h4>
              <h4>
                <u>About us</u>
              </h4>
              <h4>
                {" "}
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellat quibusdam, quae excepturi suscipit ullam facilis
                tenetur odit, sapiente alias nihil natus doloribus blanditiis
                aliquid accusantium error obcaecati eos consequuntur officia!
              </h4>
            </div>
            <div className="main-details">
              <div className="personal-details">
                <h2>
                  <u>General Details</u>
                </h2>
                <div>
                  {gCombined.map((Label) => (
                    <div className="Gdetails-section" key={Label.id}>
                      <h3>{Label.title}</h3>
                      <h3>:</h3>
                      <h3>{Label.input || "-"}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="professional-details">
                <h2>
                  <u>Professional Details</u>
                </h2>
                <div>
                  {pCombined.map((Label) => (
                    <div className="Pdetails-section" key={Label.id}>
                      <h3>{Label.title}</h3>
                      <h3>:</h3>
                      <h3>{Label.input || "-"}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="experience">
                <h2>
                  <u>Experience</u>
                </h2>
                <div>
                  {eCombined.map((Label) => (
                    <div className="Edetails-section" key={Label.id}>
                      <h3>{Label.title} </h3>
                      <h3>:</h3>
                      <h3>{Label.input || "-"}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;
