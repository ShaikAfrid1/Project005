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

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product));
    toast.success(`${product.title} added successfully!`, {
      position: "bottom-right",
    });
    reset();
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="bg-[#121212] w-full max-w-2xl p-8 md:p-10 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center tracking-wide">
          Add New Product 🛒
        </h1>

        <form
          onSubmit={handleSubmit(createProductHandler)}
          className="flex flex-col gap-5"
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-1 text-gray-300 text-base">
              Product Title
            </label>
            <input
              id="title"
              {...register("title")}
              placeholder="Type product name"
              className="w-full p-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block mb-1 text-gray-300 text-base">
              Price
            </label>
            <input
              id="price"
              {...register("price")}
              type="number"
              placeholder="₹ 0.00"
              className="w-full p-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block mb-1 text-gray-300 text-base">
              Image URL
            </label>
            <input
              id="image"
              {...register("image")}
              type="url"
              placeholder="https://image-url.com"
              className="w-full p-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block mb-1 text-gray-300 text-base">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              placeholder="Tell us more about the product..."
              rows="4"
              className="w-full p-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144] resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block mb-1 text-gray-300 text-base">
              Category
            </label>
            <input
              id="category"
              {...register("category")}
              placeholder="e.g. Men, Women, Electronics"
              className="w-full p-3 rounded-md bg-[#1e1e1e] text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BE3144]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#BE3144] hover:bg-[#F05941] text-white font-semibold py-3 rounded-md transition-all"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
