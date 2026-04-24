export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">My Shop</h1>
      <button
        onClick={onCartClick}
        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
}
