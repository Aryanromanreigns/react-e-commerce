import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Style ✨
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Shop trending products, best deals, and top quality items at one place.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg hover:bg-purple-700"
        >
          Start Shopping
        </Link>
      </div>
    </section>
  )
}

export default Home
