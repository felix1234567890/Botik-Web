import React from "react";
import ModelDetails from "../components/ModelDetailsPage/ModelsDetails/ModelDetails";
import AboutModel from "../components/ModelDetailsPage/AboutModel/AboutModel";
import Pricing from "../components/ModelsPage/Pricing/Pricing";
import Features from "../components/Features/Features";
import Testimonials from "../components/Testimonials/Testimonials";
import NextModel from "../components/ModelDetailsPage/NextModel/NextModel";

const ModelsDetailsPage = () => {
  return (
    <>
      <ModelDetails />
      <AboutModel
        firstchoice="General model info"
        secondchoice="Performance table"
        thirdchoice="Graph"
      />
      <Pricing />
      <Features />
      <Testimonials />
      <NextModel />
    </>
  );
};

export default ModelsDetailsPage;
