import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/users" element={<UserList />} />
          <Route exact path="/newUser" element={<NewUser />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/product/:productId" element={<Product />} />
          <Route exact path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
