import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../actions/userActions";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer?.user);
  const products = useSelector((state) => state.productReducer.products);

  const updateQuantity = (productId, change) => {
    const updatedCart = users.cart
      .map((item) => {
        if (item.productId === productId) {
          const newQty = item.quantity + change;
          if (newQty > 0) {
            return { ...item, quantity: newQty };
          } else {
            toast.info("Item removed from cart", { position: "bottom-right" });
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);

    const updatedUser = { ...users, cart: updatedCart };
    dispatch(asyncupdateuser(updatedUser.id, updatedUser));
  };

  const getProduct = (id) => products.find((p) => p.id === id);

  if (!users?.cart?.length) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center px-4">
        <h2 className="text-2xl sm:text-3xl animate-pulse font-light text-center">
          🛒 Your Cart is Empty
        </h2>
      </div>
    );
  }

  const totalItems = users.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = users.cart.reduce((acc, curr) => {
    const product = getProduct(curr.productId);
    return product ? acc + curr.quantity * product.price : acc;
  }, 0);

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Your Cart
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {users.cart.map((item) => {
          const product = getProduct(item.productId);
          if (!product) return null;

          return (
            <div
              key={item.productId}
              className="flex flex-col sm:flex-row bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg hover:shadow-[#BE3144]/50 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:w-[150px] h-[200px] sm:h-[150px] object-cover"
              />
              <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold mb-1">
                    {product.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-3">
                    {product.description?.slice(0, 80)}...
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                  <span className="text-[#F05941] font-semibold text-lg">
                    ₹ {product.price * item.quantity}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.productId, -1)}
                      className="bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-red-600"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.productId, 1)}
                      className="bg-gray-700 text-white w-8 h-8 rounded-full hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart Summary */}
      <div className="max-w-5xl mx-auto mt-16 p-6 bg-[#1a1a1a] rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">
          Cart Summary
        </h2>
        <div className="flex justify-between mb-2 text-lg">
          <span>Total Items:</span>
          <span>{totalItems}</span>
        </div>
        <div className="flex justify-between mb-4 text-lg font-bold text-[#F05941]">
          <span>Total Price:</span>
          <span>₹ {totalPrice}</span>
        </div>
        <button
          className="w-full bg-[#BE3144] text-white py-3 rounded-full hover:bg-[#F05941] transition duration-300"
          onClick={() => alert("Checkout is coming soon 😎")}
        >
          Checkout
        </button>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-block mt-6 bg-[#333] hover:bg-[#444] text-white px-6 py-2 rounded-full transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
