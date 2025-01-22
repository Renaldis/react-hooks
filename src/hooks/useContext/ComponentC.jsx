import { useContext } from "react";
import { userContext } from "./Apps";

export default function ComponentC() {
  const { user, role } = useContext(userContext);
  return (
    <div>
      <h1>
        {user} - {role}
      </h1>
    </div>
  );
}
