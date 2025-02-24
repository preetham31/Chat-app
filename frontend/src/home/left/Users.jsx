import React from "react";
import User from "./User";

function Users() {
  return (
    <div
      style={{ maxHeight: "calc(94vh)" }}
      className="my-1 mx-1 flex-preetham overflow-y-auto"
    >
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
    </div>
  );
}

export default Users;
