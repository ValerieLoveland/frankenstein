import React, { useState } from "react";
import "./MinimumNumber.css";
import { Card } from "../shared/Card";

export const MinimumNumber = () => {
  const [minInput1, setMinInput1] = useState(0);
  const [minInput2, setMinInput2] = useState(0);

  return (
    <Card title="Minimum Number Calculator">
      <div>
        <form className="inputs-padding" onSubmit={() => false}>
          <div>
            <label>First Number: </label>
            <input
              onChange={(event) => {
                setMinInput1(parseInt(event.currentTarget.value));
              }}
            />
          </div>
          <div>
            <label>Second Number: </label>
            <input
              onChange={(event) => {
                setMinInput2(parseInt(event.currentTarget.value));
              }}
            />
          </div>
        </form>
        <div>
          Smallest Number: {JSON.stringify(determineMin(minInput1, minInput2))}
        </div>
      </div>
    </Card>
  );
};

const determineMin = (input1: number, input2: number) => {
  let minNum = 0;
  if (input1 < input2) {
    minNum = input1;
  } else {
    minNum = input2;
  }
  console.log(minNum);
  return minNum;
};
