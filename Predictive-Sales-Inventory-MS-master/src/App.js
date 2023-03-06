import "./App.css";
import NavBar from "./shared/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRouter from "./modules/Admin/AdminRouter";
import StockManRouter from "./modules/StockMan/StockManRouter";
import Signin from "./modules/Auth/pages/Signin";

function App() {
  // const getProducts = async (e) => {
  //   const response = await fetch("https://pnic.up.railway.app/api/products", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });

  //   const data = await response.json();

  //   if (response.ok) {
  //     console.log(data);
  //     // Successful login, do something with the returned data
  //   } else {
  //     // Handle error
  //   }
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/admin/*" element={<AdminRouter />} />
        <Route exact path="/stock-manager/*" element={<StockManRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
