import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [email, setEmail] = useState(false);
  const [fullName, setFullName] = useState(false);
  const navigate= useNavigate();
  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      if (e.target.password.value !== e.target.confirmPassword.value) {
        alert("Password does not match!");
        return;
      }

      const resp = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/users/register",
        {
          method: "POST",
          body: JSON.stringify({
            email,
            fullName,
            otp: e.target.otp.value,
            password: e.target.password.value,
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );

      console.log(resp);
      const respObj = await resp.json();
      console.log(respObj);
      if (respObj.status === "success") {
        // use hook to change the page useNavigate
        navigate("/login");
      } else {
        alert(respObj.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSendOtp = async (e) => {
    try {
      e.preventDefault();
      //DOUBT:
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + "/otps", {
        method: "POST",
        body: JSON.stringify({
          email: e.target.email.value,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const resObj = await response.json();
      console.log(response);
      console.log(resObj);
      if (resObj.status === "success") {
        setIsOtpSent(true);
        setFullName(e.target.fullname.value);
        setEmail(e.target.email.value);
      } else {
        alert("Error " + resObj.message);
      }
    } catch (err) {
      // console.log(err);
      alert(err.message);

    }
  };
  return (
    <>
      {isOtpSent ? (
        <form onSubmit={handleRegister}>
          <input type="text" value={email} readOnly />
          <input type="text" value={fullName} readOnly />
          <input type="text" placeholder="OTP" name="otp" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
          <button>Register</button>
        </form>
      ) : (
        <form onSubmit={handleSendOtp}>
          <input type="text" placeholder="Full Name" name="fullname" required />
          <input type="email" placeholder="Email" name="email" required />
          <button>Send OTP</button>
        </form>
      )}
      <Link to="/login">Login</Link>
    </>
  );
};

export default SignUp;
