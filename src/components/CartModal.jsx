export default function CartModal({ cart, removeFromCart, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">No items in cart</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border rounded-lg p-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="h-14 w-14 object-contain" />
                  <span className="text-sm font-medium line-clamp-1">{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold">₹{item.price}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-between items-center">
          <span className="font-semibold">
            Total: ₹{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </span>
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
