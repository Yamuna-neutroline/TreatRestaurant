import React from "react";
import { Feedback } from "../components";
import Homepage from "../components/Homepage";
import { infoObjOne, infoObjTwo } from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";

const LandingPage = () => {
  return (
    <div>
      <Homepage />
      <InfoSection {...infoObjTwo} />
      <InfoSection {...infoObjOne} />
      <Feedback />
    </div>
  );
};

export default LandingPage;
