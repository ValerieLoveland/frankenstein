import React from "react";

export const MagSub = () => {
  return (
    <>
      <h1>Magazines to Query</h1>
      <div className="ul-style form">
        <div className="sub">
          <div>Poem</div>
          <div>Magazine</div>
          <div>Date</div>
          <div>Submitted</div>
        </div>
        <ul>
          <li>{submission("Frosties", "Poetry Magazine", "7/20/2020")}</li>
          <li>{submission("Slap Bracelets", "Kenyon Review", "08/15/2020")}</li>
          <li>
            {submission("Grabber", "American Poetry Review", "09/15/2020")}
          </li>
        </ul>
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

  let subWithQuery = ` "${poem}" ${magazine} ${startDate}
    
    Query ${magazine} about "${poem}." It has been out ${daysOut} days.`;

  let subNoQuery = ` "${poem}" ${magazine} ${startDate} ${daysOut}`;

  if (daysOut > 30) {
    console.log(`Query ${magazine} about ${poem}`);
    return subWithQuery;
  } else {
    return subNoQuery;
  }
};

const calculateDays = (
  currentDate: number,
  alteredStartDate: number
): number => {
  let days = Math.floor((currentDate - alteredStartDate) / 86400000);
  console.log(days);
  return days;
};

export type Submission = {
  poem: string;
  magazine: string;
  startDate: string;
  daysOut: number;
};
