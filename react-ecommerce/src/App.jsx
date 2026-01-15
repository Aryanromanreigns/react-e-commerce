import { Routes, Route } from "react-router-dom"

// Components
import Navbar from "./components/Navbar"

// Pages
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"

// Context
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </CartProvider>
    </AuthProvider>
  )
}

export default App
