import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const numberOfResults = 15;

export const CarBurn: React.FC = (props) => {
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

  // const isFemale = (person: Person) => {
  //   return person.gender === "female";
  // }

  const filterPeople = persons.filter((person) => {
    return person.gender === "female";
  });
  //const filterPeople = persons.filter((p) => p.gender === "female");

  // const listItems = filterPeople.map((person) => (
  //   <li key={person.userName}>
  //     <Card person={person} />
  //   </li>
  // ));

  const listItems = map(filterPeople, (person) => (
    <li key={person.userName}>
      <Card person={person} />
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
