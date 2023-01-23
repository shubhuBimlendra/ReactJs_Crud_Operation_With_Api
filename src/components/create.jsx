import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  //input value store
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //navigate to another page
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  //data inserting function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://63cd135a0f1d5967f02960a0.mockapi.io/crud-youtube", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div class="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/">
          <button class="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
