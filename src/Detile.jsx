import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const Detile = () => {
  const { userid } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/posts/" + userid).then((output) => {
      output
        .json()
        .then((den) => {
         console.log(den);
          console.log(output);
         setUser(den);
       })
       .catch((error) => {
         console.log(error.msg);
        });
    });
  }, []);
  return (
    <>
      <h1 align="center">User Detail</h1>
      {
        user &&
        <>
          <MDBTable align="middle" className="Project-table">
            <MDBTableHead>
              <tr className="fw-bolder fst-italic fs-5 text-warning">
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </>
      } 
    </>
  );
};

export default Detile;
