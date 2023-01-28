import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const handleSubmit = async (e) => {
    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),

      credentials: "include",
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      // Successful login, do something with the returned data
    } else {
      // Handle error
    }
  };
  const getProducts = async (e) => {
    const response = await fetch("https://pnic.up.railway.app/api/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      // Successful login, do something with the returned data
    } else {
      // Handle error
    }
  };
  return (
    <div>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={(e) => setPass(e.target.value)}
      />
      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      />

      <input
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          getProducts(e);
        }}
      />
    </div>
  );
}

export default App;
