import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const LoginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex flex-col w-1/2 "
    >
      <label htmlFor="user-name" className="text-xl">
        User Name:
      </label>
      <input
        {...register("username")}
        id="user-name"
        type="text"
        placeholder="Type your username"
        className="outline-0 border-b px-50 text-3xl"
      />

      <button>Login User</button>
    </form>
  );
};

export default Login;
