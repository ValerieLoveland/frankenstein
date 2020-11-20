import React from "react";
import { Card } from "../shared/Card";
import "./MagazineSubmission.css";
import { Submission } from "./Submission";

export const MagazineSubmission = () => {
  return (
    <Card title="Poetry Submissions">
      <table className="submissions">
        <tbody>
          <tr>
            <th>Poem</th> <th>Magazine</th> <th>Date</th> <th>Submitted</th>
            <th />{" "}
          </tr>
          <Submission
            submission={{
              poem: "Frosties",
              magazine: "Poetry Magazine",
              startDate: "7/20/2020",
            }}
          />
        </tbody>
      </table>
    </Card>
  );
};
