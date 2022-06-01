import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/home" element={<Shop />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
