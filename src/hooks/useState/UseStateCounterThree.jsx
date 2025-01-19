import { useState } from "react";

export default function UseStateCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleInput = (e) => {
    const { name: inputName, value } = e.target;
    setName((prevName) => {
      return {
        ...prevName,
        [inputName]: value,
      };
    });
  };

  console.log(name.firstName);
  console.log(name.lastName);

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        name="firstName"
        onChange={handleInput}
      />
      <input
        type="text"
        value={name.lastName}
        name="lastName"
        onChange={handleInput}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}
