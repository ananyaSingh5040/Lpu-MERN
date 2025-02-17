import React from "react";

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/users/login",
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const resObj= await resp.json();
    console.log(resp);
    console.log(resObj);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" name="email" required />
        {/* Uncontrolled Inputs */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        {/* Uncontrolled Inputs */}
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
