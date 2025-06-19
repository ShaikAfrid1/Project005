import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { asyncregisteruser } from "../../actions/userActions";
import { toast } from "react-toastify";
import { asynccreateproduct } from "../../actions/productActions";
/* eslint-disable no-unused-vars */

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = async (product) => {
    product.id = nanoid();
    dispatch(asynccreateproduct(product));
    console.log(product);

    toast.success(`${product.title} Added Successfully!`, {
      position: "bottom-right",
    });
    navigate("/products");
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center">
        <h1 className="mb-3 text-4xl items-center">Create Product!</h1>
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(createProductHandler)}
          className="flex justify-start flex-col w-1/3 p-1 "
        >
          <label htmlFor="title" className="text-xl">
            Title:
          </label>

          <input
            id="title"
            {...register("title")}
            placeholder="Product Name"
            className="outline-0 border-b mb-2 p-2 text-3xl"
          />

          <label htmlFor="price" className="text-xl">
            Price:
          </label>

          <input
            id="price"
            {...register("price")}
            type="number"
            placeholder="&#8377; 0.00"
            className="outline-0 border-b mb-2 p-2 text-3xl"
          />

          <label htmlFor="image" className="text-xl">
            Image:
          </label>

          <input
            id="image"
            {...register("image")}
            type="url"
            placeholder="Image URL"
            className="outline-0 border-b mb-2 p-2 text-3xl"
          />

          <label htmlFor="description" className="text-xl">
            Description:
          </label>

          <textarea
            id="description"
            {...register("description")}
            placeholder="Enter Description here..."
            className="outline-0 border-b mb-2 p-2 text-3xl"
          ></textarea>

          <label htmlFor="category" className="text-xl">
            Category:
          </label>

          <input
            id="category"
            {...register("category")}
            placeholder="Category"
            className="outline-0 border-b mb-2 p-2 text-3xl"
          />

          <button
            type="submit"
            className="bg-[#BE3144] rounded-2xl mt-1 active:bg-[#ff314c]"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
