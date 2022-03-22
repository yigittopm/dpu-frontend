import React from "react";
import { AuthLocalStorage } from "../../../LocalStorage";

function AddPage() {
  const { email, username, role, id } = AuthLocalStorage();
  return (
    <div className="text-center mt-4">
      <h3>@{username}</h3>
      <code>{email}</code>
      <h4>Role: {role}</h4>
      <h5>🔑 : {id}</h5>
    </div>
  );
}

export default AddPage;
