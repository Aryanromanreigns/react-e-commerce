import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProductById } from "../services/api"
import { useCart } from "../context/CartContext"


const ProductDetails = () => {
const { id } = useParams()
const [product, setProduct] = useState(null)
const { addToCart } = useCart()


useEffect(() => {
getProductById(id).then(res => setProduct(res.data))
}, [id])


if (!product) return <p className="p-6">Loading...</p>


return (
<div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
<img src={product.image} className="h-80 mx-auto" />
<div>
<h1 className="text-2xl font-bold">{product.title}</h1>
<p className="mt-4">{product.description}</p>
<p className="text-xl font-bold mt-4">${product.price}</p>
<button
onClick={() => addToCart(product)}
className="mt-6 bg-black text-white px-6 py-3 rounded"
>
Add to Cart
</button>
</div>
</div>
)
}


export default ProductDetails