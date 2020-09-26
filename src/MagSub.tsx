import React from "react";

export const MagSub = () => {
  const submission = function (
    poem: string,
    magazine: string,
    startDate: Date
  ) {
    let currentDate = Date.now();
    let daysOut = startDate - currentDate;
    if (daysOut > 30) {
      console.log(`query ${magazine} about ${poem}`);
    }
  };

  submission("", "", "");
  submission("", "", "");
  submission("", "", "");
  submission("", "", "");
};
