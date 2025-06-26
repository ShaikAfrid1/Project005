import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-extrabold text-[#BE3144] mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The page you're looking for doesn’t exist or has been moved. But Luxora
        is still shining 💎
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#BE3144] text-white rounded-full hover:bg-[#F05941] transition duration-300 font-semibold"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
