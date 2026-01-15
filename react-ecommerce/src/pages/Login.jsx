import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email) return

    login({ name, email })
    navigate("/")   // ✅ Redirect to Home
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to continue shopping
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:scale-105 transition-transform"
          >
            Login & Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
