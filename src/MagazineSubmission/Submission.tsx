import React from "react";

export const Submission: React.FC<SubmissionProps> = (props) => {
  const { submission } = props;

  let alteredStartDate = Date.parse(submission.startDate);
  let currentDate = Date.now();
  console.log(`altered ${alteredStartDate} current ${currentDate}`);

  let daysOut = calculateDays(currentDate, alteredStartDate);

  if (daysOut > 30) {
    return (
      <tr>
        <td>{submission.poem}</td>
        <td>{submission.magazine}</td>
        <td>{submission.startDate}</td>
        <td>{daysOut} days out*</td>
        <td>*Query {submission.magazine}.</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{submission.poem}</td>
      <td>{submission.magazine}</td>
      <td>{submission.startDate}</td>
      <td>{daysOut} days out</td>
      <td />
    </tr>
  );
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
