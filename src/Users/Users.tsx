import React, { useEffect, useState } from "react";
import { PersonCard } from "./PersonCard";

const numberOfResults = 25;

export const Users: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=" + numberOfResults).then(
      (response) => {
        response.json().then(function (data) {
          const persons = data.results.map((result: any) => {
            return {
              name: result.name.first,
              lastName: result.name.last,
              userName: result.login.username,
              avatar: result.picture.medium,
              gender: result.gender,
            };
          });
          setPersons(persons);
        });
      }
    );
  }, []);

  const filterPeople = persons.filter((person) => {
    return person.gender === "female";
  });

  const listItems = map(filterPeople, (person) => (
    <li className="card" key={person.userName}>
      <PersonCard person={person} />
    </li>
  ));

  return <ul className="ul-style">{listItems}</ul>;
};

export type Person = {
  name: string;
  lastName: string;
  userName: string;
  avatar: string;
  gender: string;
};

function map<T, R>(arr: T[], iteratee: (item: T) => R): R[] {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    let result = iteratee(arr[index]);
    newArr.push(result);
  }

  return newArr;
}
