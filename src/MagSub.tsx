import React from "react";

export const MagSub = () => {
  //const [sub, setSub] = useState("");
  return (
    <>
      <header>Magazine Submissions</header>
      <div>Poem Magazine Date Submitted</div>
      <div>calculateDays</div>
      <li>{}</li>
    </>
  );
};

const submission = function (
  poem: string,
  magazine: string,
  startDate: string
) {
  let alteredStartDate = Date.parse(startDate);
  let currentDate = Date.now();
  console.log(`altered ${alteredStartDate} current ${currentDate}`);

  let daysOut = calculateDays(currentDate, alteredStartDate);

  if (daysOut > 30) {
    console.log(`query ${magazine} about ${poem}`);
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

submission("Frosties", "Poetry Magazine", "7/20/2020");
submission("Slap Bracelets", "Kenyon Review", "08/15/2020");
