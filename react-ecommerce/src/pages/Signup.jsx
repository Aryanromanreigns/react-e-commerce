import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return

    // Mock signup → directly log in user
    login({ name, email })
    navigate("/") // ✅ Redirect to Home after signup
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 via-teal-500 to-blue-500 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create Account ✨
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Sign up to start shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-green-500 to-teal-500
              hover:scale-105 transition-transform"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-teal-600 cursor-pointer font-medium"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}

export default Signup
