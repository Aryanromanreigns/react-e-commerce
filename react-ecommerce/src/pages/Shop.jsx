import { useEffect, useState } from "react"
import { getProducts } from "../services/api"
import ProductCard from "../components/ProductCard"

const Shop = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then(res => setProducts(res.data))
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shop
