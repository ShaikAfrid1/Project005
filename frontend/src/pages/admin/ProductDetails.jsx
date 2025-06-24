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

  return product ? (
    <>
      <div className="w-full flex">
        <img
          className="w-1/2  object-cover"
          src={product.image}
          alt="Product Image"
        />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="text-5xl font-thin mb-10">{product.title}</h1>
          <h2 className="mb-5 text-2xl text-green-400">
            &#8377;{product.price}
          </h2>
          <p className="font-thin mb-5">{product.description}</p>

          <button className="flex items-center gap-2 bg-[#BE3144] text-white px-3 py-1 rounded-lg">
            <ShoppingCartIcon fontSize="small" />
            Add to Cart
          </button>
        </div>
      </div>
      <br /> <br />
      <hr />
      <div>
        {users && users?.isAdmin && (
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="flex justify-start flex-col  p-1 "
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
              className="bg-green-400 rounded-2xl mt-3 active:bg-green-500"
            >
              Update Product
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="bg-red-400 rounded-2xl mt-3 active:bg-red-500"
            >
              Delete Product
            </button>
          </form>
        )}
      </div>
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
