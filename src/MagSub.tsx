import React from "react";

export const MagSub = () => {
  return (
    <>
      <h1>Magazine Submissions</h1>
      <div className="ul-style form">
        <div className="sub">
          <div>Poem</div>
          <div>Magazine</div>
          <div>Date</div>
          <div>Submitted</div>
        </div>
        <li>{submission("Frosties", "Poetry Magazine", "7/20/2020")}</li>
        <li>{submission("Slap Bracelets", "Kenyon Review", "08/15/2020")}</li>
      </div>
    </>
  );
};

const submission = function (
  poem: string,
  magazine: string,
  startDate: string
): string {
  let alteredStartDate = Date.parse(startDate);
  let currentDate = Date.now();
  console.log(`altered ${alteredStartDate} current ${currentDate}`);

  let daysOut = calculateDays(currentDate, alteredStartDate);

  if (daysOut > 30) {
    console.log(`query ${magazine} about ${poem}`);
  }
  return `query ${magazine} about ${poem}`;
};

const calculateDays = (
  currentDate: number,
  alteredStartDate: number
): number => {
  let days = Math.floor((currentDate - alteredStartDate) / 86400000);
  console.log(days);
  return days;
};
