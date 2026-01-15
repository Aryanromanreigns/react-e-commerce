import { useCart } from "../context/CartContext"

const Checkout = () => {
  const { cart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Shipping Form */}
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="font-semibold mb-4">Shipping Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Full Name" />
          <input className="border p-2 rounded" placeholder="Email" />
          <input className="border p-2 rounded md:col-span-2" placeholder="Address" />
          <input className="border p-2 rounded" placeholder="City" />
          <input className="border p-2 rounded" placeholder="Postal Code" />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-semibold mb-4">Order Summary</h2>

        {cart.map(item => (
          <div key={item.id} className="flex justify-between mb-2 text-sm">
            <span>{item.title} × {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold mt-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800">
          Place Order
        </button>
      </div>
    </div>
  )
}

export default Checkout
