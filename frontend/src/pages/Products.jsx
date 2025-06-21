import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const renderProducts = products.map((product) => {
    if (!product.title || !product.price || !product.image) return null;

    return (
      <div
        key={product.id}
        className="w-[22%] bg-[#872341] text-white rounded-xl  overflow-hidden shadow-md flex flex-col hover:scale-[1.03] transition-all"
      >
        <img
          src={product.image}
          alt="product"
          className="w-full h-[200px] object-cover"
        />

        <div className="p-4 flex cursor-pointer flex-col justify-between flex-grow">
          <div>
            <h1 className="text-lg font-bold mb-2">{product.title}</h1>
            <p className="text-sm text-gray-200">
              {product.description?.slice(0, 70) || "No description"}...
              <Link className="text-blue-400" to={`/product/${product.id}`}>
                View More
              </Link>
            </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="text-[#F05941] font-semibold text-md">
              ₹ {product.price}
            </span>
            <button className="bg-[#BE3144] hover:bg-[#F05941] px-4 py-1 rounded-full text-white font-bold text-sm">
              {" "}
              <ShoppingCartIcon fontSize="small" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="bg-[#22092C] p-10 flex flex-wrap gap-6 justify-center">
      {renderProducts}
    </div>
  ) : (
    <div className="text-white text-center text-xl mt-10">Loading...</div>
  );
};

export default Products;
