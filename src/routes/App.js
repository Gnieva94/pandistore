import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../containers/Home";
import Products from "../containers/Products";
import Cart from "../containers/Cart";
import Layout from "../components/Layout";
import UseContext from "../context/UseContexto";

function App() {
  return (
    <>
    <BrowserRouter>
      <UseContext>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products/>} />
            <Route path="cart" element={<Cart/>} />
          </Routes>
        </Layout>
      </UseContext>
    </BrowserRouter>
    </>
  );
}

export default App;
