import React from "react";
import { Card } from "../shared/Card";

export const Fizzbuzz: React.FC = () => {
  return (
    <>
      <Card title="Fizz Buzz">
        <div>{fizzbuzzOutput}</div>
      </Card>
    </>
  );
};

let fizzBuzzArr = [""];

function fizzbuzzOutput() {
  for (let i = 0; i < 99; i++) {
    let num = i + 1;
    if (num % 3 === 0 && num % 5 === 0) {
      fizzBuzzArr.push("fizzbuzz");
    } else if (num % 3 === 0) {
      fizzBuzzArr.push("fizz");
    } else if (num % 5 === 0) {
      fizzBuzzArr.push("buzz");
    } else {
      fizzBuzzArr.push((i + 1).toString());
    }
  }
  console.log(fizzBuzzArr);
  const listItems = fizzBuzzArr.map((fizzOrBuzz) => (
    <li key={fizzOrBuzz}>{fizzOrBuzz}</li>
  ));

  return <ul>{listItems}</ul>;
}
