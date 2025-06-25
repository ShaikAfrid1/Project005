import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { asynccreateproduct } from "../../actions/productActions";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = async (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product));
    toast.success(`${product.title} added successfully!`, {
      position: "bottom-right",
    });
    reset();
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-[#121212] w-[90%] max-w-2xl p-10 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-4xl font-bold mb-8 text-center tracking-wide">
          Add New Product 🛒
        </h1>

        <form
          onSubmit={handleSubmit(createProductHandler)}
          className="flex flex-col gap-6"
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-1 text-gray-300 text-lg">
              Product Title
            </label>
            <input
              id="title"
              {...register("title")}
              placeholder="Type product name"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block mb-1 text-gray-300 text-lg">
              Price
            </label>
            <input
              id="price"
              {...register("price")}
              type="number"
              placeholder="₹ 0.00"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Image URL */}
          <div>
            <label htmlFor="image" className="block mb-1 text-gray-300 text-lg">
              Image URL
            </label>
            <input
              id="image"
              {...register("image")}
              type="url"
              placeholder="https://image-url.com"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block mb-1 text-gray-300 text-lg"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              placeholder="Tell us more about the product..."
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              rows="4"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block mb-1 text-gray-300 text-lg"
            >
              Category
            </label>
            <input
              id="category"
              {...register("category")}
              placeholder="e.g. Men, Women, Electronics"
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-300 transition-all"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
