/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../actions/productActions";
import { asyncupdateuser } from "../../actions/userActions";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);
  const product = products?.find((product) => product.id == id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
    toast.success(`${product.title} Updated Successfully!`, {
      position: "bottom-right",
    });
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  const AddToCartHandler = (id) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const x = copyUser.cart.findIndex((c) => c.productId == id);

    if (x == -1) {
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

  return product ? (
    <div className="bg-[#0B0B0B] text-white min-h-screen px-8 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            className="rounded-xl w-full h-[500px] object-cover shadow-lg"
            src={product.image}
            alt="Product"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[#F05941]">
              {product.title}
            </h1>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              ₹{product.price}
            </h2>
            <p className="text-gray-300 mb-6">{product.description}</p>
          </div>

          <button
            onClick={() => AddToCartHandler(product.id)}
            className="w-fit bg-[#BE3144] hover:bg-[#F05941] px-6 py-2 rounded-full text-white font-semibold flex items-center gap-2 transition duration-300"
          >
            <ShoppingCartIcon fontSize="small" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Admin Edit Section */}
      {users && users?.isAdmin && (
        <div className="mt-12 bg-[#1a1a1a] p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Update Product
          </h3>
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="text-sm text-gray-400">Title:</label>
              <input
                {...register("title")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Price:</label>
              <input
                type="number"
                {...register("price")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Image URL:</label>
              <input
                {...register("image")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Category:</label>
              <input
                {...register("category")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-sm text-gray-400">Description:</label>
              <textarea
                rows="4"
                {...register("description")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              ></textarea>
            </div>

            <div className="flex gap-4 col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Delete Product
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    <div className="text-white text-center mt-20 animate-pulse text-xl">
      Loading...
    </div>
  );
};

export default ProductDetails;
