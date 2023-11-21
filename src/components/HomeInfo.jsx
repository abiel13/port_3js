import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, btnText, href }) => {
  return (
    <div className="info-box">
      <p className="font-medium text-center sm:text-lg ">{text}</p>
      <Link className="neo-brutalism-white neo-btn" to={href}>
        {" "}
        {btnText}
      </Link>
    </div>
  );
};

const render = {
  1: (
    <h1 className="neo-brutalism-blue capitalize text-center leading-snug px-8 py-4 text-white font-medium">
      Hello am Abiel <br /> a software engineer from Nigeria{" "}
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "worked with many companies and picked up many skills along the way"
      }
      href={"/about"}
      btnText={"learn more"}
    />
  ),
  3: (
    <InfoBox
      text={"Led a lot of Software Projects Curious How they went ?"}
      href={"/projects"}
      btnText={"Visit My Portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={"Need a Software Engineer am just a click away"}
      href={"/contact"}
      btnText={"Lets talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return render[currentStage];
};

export default HomeInfo;
