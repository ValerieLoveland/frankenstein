import React, { useEffect, useState } from "react";

const numberOfResults = 2;

export const CarBurn: React.FC = (props) => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=" + numberOfResults).then(
      (response) => {
        response.json().then(function (data) {
          setPersons({
            name: data.results[0].name.first,
            lastName: data.results[0].name.last,
            userName: data.results[0].login.username,
            avatar: data.results[0].picture.medium,
          });
        });
      }
    );
  }, []);

  return (
    <>
      <div className="card">
        <div>
          {persons.name} {persons.lastName}
        </div>
        <div>{persons.userName}</div>
        {persons.avatar && (
          <img src={persons.avatar} alt="headshot of person" />
        )}
      </div>

      {/* <div className="card">
        <div>
          {persons.name} {persons.lastName}
        </div>
        <div>{persons.userName}</div>
        {persons.avatar && (
          <img src={persons.avatar} alt="headshot of person" />
        )}
      </div> */}
    </>
  );
};

type Person = {
  name: string | null;
  lastName: string | null;
  userName: string | null;
  avatar: string | null;
};

export const CarBurn2: React.FC = () => {
  return (
    <>
      <CarBurn />
    </>
  );
};
