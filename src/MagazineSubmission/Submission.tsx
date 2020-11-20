import React from "react";

export const Submission: React.FC<SubmissionProps> = (props) => {
  const { submission } = props;
  return (
    <div>
      {submissionFunction(
        submission.poem,
        submission.magazine,
        submission.startDate
      )}
    </div>
  );
};

export const submissionFunction = function (
  poem: string,
  magazine: string,
  startDate: string
) {
  let alteredStartDate = Date.parse(startDate);
  let currentDate = Date.now();
  console.log(`altered ${alteredStartDate} current ${currentDate}`);

  let daysOut = calculateDays(currentDate, alteredStartDate);

  if (daysOut > 30) {
    return (
      <tr>
        <td>{poem}</td>
        <td>{magazine}</td>
        <td>{startDate}</td>
        <td>{daysOut} days out*</td>
        <td>*Query {magazine}.</td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{poem}</td>
        <td>{magazine}</td>
        <td>{startDate}</td>
        <td>{daysOut} days out</td>
      </tr>
    );
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

interface SubmissionProps {
  submission: { magazine: string; poem: string; startDate: string };
}
