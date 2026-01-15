import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="h-56 flex items-center justify-center bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="mt-2 font-bold">${product.price}</p>

        <Link
          to={`/product/${product.id}`}
          className="block text-center mt-4 bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default ProductCard
