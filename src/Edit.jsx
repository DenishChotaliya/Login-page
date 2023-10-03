// import React from 'react';
// const Edit = () => {
//     return (
//         <>
//         <h1>Edit</h1>
//         </>
//      );
// }

// export default Edit;
import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

export default function Edit() {
    const [user, setUser] = useState({});
    const { userid } = useParams();
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
      <h1>Edit</h1>
      {
        <>
          <MDBTable align="center">
            <MDBTableHead>
              <tr>
                <th scope="col">name</th>
                <th scope="col">email</th>
                <th scope="col">password</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
            <tr>
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
}
