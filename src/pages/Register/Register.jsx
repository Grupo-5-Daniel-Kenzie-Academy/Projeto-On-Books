import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <button>
        <Link to="/">Login</Link>
      </button>
    </div>
  );
};
