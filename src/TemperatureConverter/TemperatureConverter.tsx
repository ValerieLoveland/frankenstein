import React, { useState } from "react";
import { Card } from "../shared/Card";
import "./TemperatureConverter.css";

export const TemperatureConverter = () => {
  const [input, setInput] = useState<UserInput>({ value: 0, units: "F" });

  return (
    <Card title="Temperature Converter">
      <div>
        <form onSubmit={() => false}>
          <div>
            <p>
              <label> Convert Farenheit</label>
            </p>
            <input
              className="input"
              onChange={(event) => {
                setInput({
                  value: parseInt(event.currentTarget.value),
                  units: "F",
                });
              }}
              value={convert(input, "F")}
            />
          </div>

          <p>
            <label>Convert Celsius</label>
          </p>
          <input
            className="input"
            onChange={(event) => {
              setInput({
                value: parseInt(event.currentTarget.value),
                units: "C",
              });
            }}
            value={convert(input, "C")}
          />
        </form>
      </div>
    </Card>
  );
};

const convert = (input: UserInput, desiredUnits: TemperatureUnits) => {
  if (desiredUnits === input.units) {
    return input.value;
  }

  if (input.units === "C") {
    return input.value * 1.8 + 32;
  }

  return (input.value - 32) / 1.8;
};

type TemperatureUnits = "F" | "C";
type UserInput = { value: number; units: TemperatureUnits };
