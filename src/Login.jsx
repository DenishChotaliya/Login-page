import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const Login = () => {
    console.log("Login");
    fetch("http://localhost:5000/posts?name=" + name).then((output) => {
      output.json().then((resp) => {
        console.log(resp);
        // console.log(output);
        // setUser(den);
        if (resp[0]) {
          sessionStorage.setItem('rol', resp[0].rol)
          if (resp[0].rol == 1) {
            navigate("/admin")
          }
          else{
            navigate("/home")
          }
          
        }
      });
    });
    setName("")
    setPassword("")
  };
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "400px" }}
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>

              <MDBInput
                className="text-white"
                value={name}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="User name"
                id="formControlLg"
                type="text"
                size="lg"
                onChange={(get) => setName(get.target.value)}
              />
              <MDBInput
                className="text-white"
                value={password}
                wrapperClass="mb-4 mx-5 w-100"
                labelClass="text-white"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                onChange={(get) => setPassword(get.target.value)}
              />

              <p className="small mb-3 pb-lg-2">
                <a class="text-white-50" href="#!">
                  Forgot password?
                </a>
              </p>
              <MDBBtn
                outline
                className="mx-2 px-5"
                color="white"
                size="lg"
                onClick={Login}
              >
                Login
              </MDBBtn>

              <div className="d-flex flex-row mt-3 mb-3"></div>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <Link to="/register">
                    {" "}
                    <span class="text-white-50 fw-bold">Register</span>
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
