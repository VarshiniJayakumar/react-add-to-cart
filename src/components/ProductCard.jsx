export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />
      <h2 className="text-sm font-semibold text-center line-clamp-2">{product.title}</h2>
      <p className="text-gray-700 font-bold mt-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
