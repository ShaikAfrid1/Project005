/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";
import { asyncupdateuser } from "../actions/userActions";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "../Api/AxiosConfig";
import InfiniteScroll from "react-infinite-scroll-component";

const Products = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer?.users);

  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...data]);
      }
    } catch (error) {
      console.log("Failed to fetch products", error);
      toast.error("Could not load products!", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const AddToCartHandler = (id) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const x = copyUser.cart.findIndex((c) => c.productId === id);

    if (x === -1) {
      copyUser.cart.push({ productId: id, quantity: 1 });
    } else {
      copyUser.cart[x] = {
        productId: id,
        quantity: copyUser.cart[x].quantity + 1,
      };
    }

    dispatch(asyncupdateuser(copyUser.id, copyUser));
    toast.success("Added to cart!", { position: "bottom-right" });
  };

  const renderProducts = products.map((product) => {
    if (!product.title || !product.price || !product.image) return null;

    return (
      <div
        key={product.id}
        className="bg-[#121212] text-white rounded-xl overflow-hidden shadow-md flex flex-col hover:scale-105 transition-transform w-[260px]"
      >
        <img
          src={product.image}
          alt="product"
          className="w-full h-[200px] object-cover"
        />

        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h1 className="text-lg font-semibold mb-2">{product.title}</h1>
            <p className="text-sm text-gray-400">
              {product.description?.slice(0, 70) || "No description"}...
              <Link
                className="text-blue-400 hover:underline ml-1"
                to={`/product/${product.id}`}
              >
                View More
              </Link>
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[#F05941] font-semibold text-md">
              ₹ {product.price}
            </span>
            <button
              onClick={() => AddToCartHandler(product.id)}
              className="bg-[#BE3144] hover:bg-[#F05941] px-4 py-1 rounded-full text-white font-bold text-sm flex items-center gap-1"
            >
              <ShoppingCartIcon fontSize="small" />
              Add
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-black py-14 px-6 min-h-screen overflow-hidden">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Our Products
      </h1>

      {products.length === 0 && loading ? (
        <div className="text-white text-center mt-10 flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#BE3144] border-opacity-50"></div>
        </div>
      ) : (
        <InfiniteScroll
          dataLength={products.length}
          next={fetchProducts}
          hasMore={hasMore}
          loader={
            <div className="w-full flex justify-center mt-10 mb-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#F05941] border-opacity-50"></div>
            </div>
          }
          endMessage={
            <div className="w-full flex justify-center mt-16 mb-10">
              <p className="text-white text-sm animate-pulse italic opacity-70">
                🛍️ You’ve reached the end!
              </p>
            </div>
          }
          className="w-full flex flex-wrap justify-center gap-6"
          scrollThreshold="90%"
          style={{ overflow: "visible" }}
        >
          {renderProducts}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Products;
