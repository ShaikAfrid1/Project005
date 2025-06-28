import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-7xl md:text-8xl font-extrabold text-[#BE3144] mb-4 animate-bounce">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-3">Page Not Found</p>
      <p className="text-gray-400 mb-8 max-w-md">
        The page you're looking for doesn’t exist or might have been moved. But
        hey, <span className="text-white font-semibold">Luxora</span> is still
        shining bright ✨
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-[#BE3144] hover:bg-[#F05941] text-white rounded-full font-semibold transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
