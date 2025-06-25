import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderProducts = products.slice(0, 20).map((product) => {
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
            <button className="bg-[#BE3144] hover:bg-[#F05941] px-4 py-1 rounded-full text-white font-bold text-sm flex items-center gap-1">
              <ShoppingCartIcon fontSize="small" />
              Add
            </button>
          </div>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="bg-black py-14 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {renderProducts}
      </div>
    </div>
  ) : (
    <div className="text-white text-center text-xl mt-10">Loading...</div>
  );
};

export default Products;
