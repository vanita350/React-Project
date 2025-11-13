import { Route, Routes } from "react-router";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Addproduct from "./component/addProduct/Addproduct";
import Menproduct from "./component/Men/Menproduct";
import Editproduct from "./component/editproduct/Editproduct";
import Register from "./Register";
import Login from "./Login";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/edit-product/:id" element={<Editproduct />} />
        <Route path="/Men" element={<Menproduct />} />
      </Routes>


    </>
  )
}

export default App;
