import React, { useState } from "react";
import CommonCard from "./CommonCard";
import { icons } from "../utils/icons";
import FeedbackForm from "./FeedbackForm";
import CommonModal from "./CommonModal";

const Sidebar = () => {
  const [openFeedback, setOpenFeedback] = useState(false);

  return (
    <div className="sidebarWrapper">
      <div className="sidebarCardBox">
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
          <div className="toggleCardContainer">
            <h2> View Toggle </h2>
            <div>
              <button className="HeadingToggle">
                <img src={icons.cardHeading} alt="cardHeading" />
              </button>
              <button className="cardListToggle">
                <img src={icons.cardList} alt="cardList" />
              </button>
            </div>
          </div>
        </CommonCard>
        <CommonCard>
          <div className="feedbackCardContainer">
            <h2> Have a Feedback? </h2>
            <button
              className="feedbackBtn"
              onClick={() => setOpenFeedback(true)}
            >
              We're Listening
            </button>
          </div>
        </CommonCard>
      </div>
      {openFeedback ? (
        <CommonModal
         open={openFeedback}
        >
          <FeedbackForm />
        </CommonModal>
      ) : null}
    </div>
  );
};

export default Sidebar;
