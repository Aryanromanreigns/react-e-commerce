import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const { cart } = useCart()
  const { user, logout } = useAuth()

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🛒 ShopEase
        </Link>

        <div className="flex items-center gap-6 text-sm">
          <Link to="/shop" className="hover:underline">Shop</Link>
          <Link to="/cart" className="hover:underline">
            Cart ({cart.length})
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="bg-white text-purple-600 px-4 py-1 rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-white text-purple-600 px-4 py-1 rounded-full">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
