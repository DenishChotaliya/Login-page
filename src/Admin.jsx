import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
const Admin = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const heandeldetail = (id) => {
    // navigate("/Detile/" + id );
    console.log("hello");
    navigate("/detile/" + id);
  };
  const Heandeledit = (id) => {
    navigate("/edit/"+id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/posts").then((output) => {
      output
        .json()
        .then((resp) => {
          console.log(resp);
          // console.log(output);
          setUser(resp);
        })
        .catch((error) => {
          console.log(error.msg);
        });
    });
  }, []);

  return (
    <>
      <MDBTable align="center" className="Project-table">
        <MDBTableHead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>Email</td>
            <td>Password</td>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          
          {user.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>

              <button
                className="btn-project"
                onClick={() => {
                  Heandeledit(item.id);
                }}
              >
                Edit
              </button>
              <button
                className="btn-project"
                onClick={() => {
                  heandeldetail(item.id);
                }}
              >
                detail
              </button>
              <button
                className="btn-project"
                //   onClick={() => {
                //     Heandeldelet();
                //   }}
              >
                Delet
              </button>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default Admin;
