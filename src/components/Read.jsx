import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  //Dark Table
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://63cd135a0f1d5967f02960a0.mockapi.io/crud-youtube")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  // Delete methods
  function handleDelete(id) {
    axios
      .delete(`https://63cd135a0f1d5967f02960a0.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  //this function will automatically reload after deleting or edit
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
      <div class="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/create">
          <button class="btn btn-primary">Create Data</button>
        </Link>
      </div>
      <table class={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        class="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
