import React from "react";

const render = {
  1: <h1>wassup</h1>,
  2: <h1>2</h1>,
  3: <h1>3</h1>,
  4: <h1>4</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return render[currentStage];
};

export default HomeInfo;
