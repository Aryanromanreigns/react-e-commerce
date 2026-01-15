import { useCart } from "../context/CartContext"

const Cart = () => {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-sm text-gray-500">
              ${item.price} × {item.quantity}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default Cart
