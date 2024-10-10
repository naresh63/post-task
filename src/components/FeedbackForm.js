import React from "react";
import CommonCard from "./CommonCard";
import { icons } from "../utils/icons";
import Textbox from "./Textbox";

const FeedbackForm = () => {
  return (
    <div>
      <div className="feedbackFormContainer">
        <div className="feedbackLeft">
          <CommonCard>
            <div className="profileCard">
              <div className="profileImgBox">
                <img src={icons.profile} alt="profile svg" />
              </div>
              <div>
                <h3> Hi, Reader,</h3>
                <h4 className="profileCardSubTitle"> Here's Your News </h4>
              </div>
            </div>
          </CommonCard>

          <CommonCard>
            <div className="feedbackCardContainer">
              <h2> Have a Feedback? </h2>
              <button className="feedbackBtn feedbackBtnActive">
                We're Listening
              </button>
            </div>
          </CommonCard>
        </div>
        <div className="feedbackRight">
          <h3> Thank you so much for taking the time!</h3>
          <p> Please provide the below details! </p>
          <div className="feedbackFormBox">
            <Textbox label="First Name" Placeholder="John" />

            <Textbox label="Last Name" Placeholder="Doe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
