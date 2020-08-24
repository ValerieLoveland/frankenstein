import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CarBurn: React.FC = (props) => {
  let { id } = useParams();
  const [person, setPerson] = useState<Person>({
    name: null,
    lastName: null,
    userName: null,
  });

  useEffect(() => {
    fetch("https://randomuser.me/api/").then((response) => {
      response.json().then(function (data) {
        setPerson({
          name: data.results[0].name.first,
          lastName: data.results[0].name.last,
          userName: data.results[0].login.username,
        });
      });
    });
  }, []);

  return (
    <>
      <div>
        {person.name} {person.lastName}
      </div>
      <div>{person.userName}</div>
    </>
  );
};

type Person = {
  name: string | null;
  lastName: string | null;
  userName: string | null;
};
