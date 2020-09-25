import React, { useState } from "react";

export const Min = () => {
  const [minInput1, setMinInput1] = useState(0);
  const [minInput2, setMinInput2] = useState(0);

  return (
    <>
      <form onSubmit={() => false}>
        <header>Smallest Number</header>

        <label>First Number: </label>
        <input
          onChange={(event) => {
            setMinInput1(parseInt(event.currentTarget.value));
          }}
        />

        <div>
          <label>Second Number: </label>
          <input
            onChange={(event) => {
              setMinInput2(parseInt(event.currentTarget.value));
            }}
          />
        </div>
      </form>
      <div>{JSON.stringify(minInput1)}</div>
      <div>{JSON.stringify(minInput2)}</div>
      <div>{JSON.stringify(determineMin(minInput1, minInput2))}</div>
    </>
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
