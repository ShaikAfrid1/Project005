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
    userReducer: { user },
  } = useSelector((state) => state);

  const product = products?.find((p) => p.id == id);

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

  const updateProductHandler = (data) => {
    dispatch(asyncupdateproduct(id, data));
    toast.success(`${data.title} Updated Successfully!`, {
      position: "bottom-right",
    });
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/products");
  };

  const AddToCartHandler = (id) => {
    const copyUser = { ...user, cart: [...user.cart] };
    const index = copyUser.cart.findIndex((c) => c.productId == id);

    if (index === -1) {
      copyUser.cart.push({ productId: id, quantity: 1 });
    } else {
      copyUser.cart[index].quantity += 1;
    }

    dispatch(asyncupdateuser(copyUser.id, copyUser));
    toast.success("Added to cart!", { position: "bottom-right" });
  };

  if (!product) {
    return (
      <div className="text-white text-center mt-20 animate-pulse text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-xl w-full h-[300px] md:h-[500px] object-cover shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#F05941]">
              {product.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-4">
              ₹{product.price}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>
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

      {/* Admin Section */}
      {user?.isAdmin && (
        <div className="mt-12 bg-[#1a1a1a] p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Update Product
          </h3>
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label className="text-sm text-gray-400">Title</label>
              <input
                {...register("title")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Price</label>
              <input
                type="number"
                {...register("price")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Image URL</label>
              <input
                {...register("image")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Category</label>
              <input
                {...register("category")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-sm text-gray-400">Description</label>
              <textarea
                rows="4"
                {...register("description")}
                className="w-full p-3 rounded bg-[#2a2a2a] text-white outline-none border border-gray-700"
              />
            </div>

            <div className="flex gap-4 col-span-1 md:col-span-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Update
              </button>
              <button
                type="button"
                onClick={deleteHandler}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
