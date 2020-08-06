import * as React from "react";

import { Pet } from "../models/PetStoreApi";

export const PetsList = () => {
  const [pets, setPets] = React.useState<Pet[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:80/pets", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setPets(res);
      });
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <>
      <h1>List of pets</h1>
      {pets && pets.length > 0 && (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};
