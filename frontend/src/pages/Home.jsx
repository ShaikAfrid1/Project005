import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/AddShoppingCartSharp";

const Home = () => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <div className="text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/Hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-60 z-10"></div>

        {/* Text Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Discover Your Next Obsession
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed">
            Explore premium fashion, electronics, and lifestyle products — all
            in one place.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
      <br /> <br />
      {/* Categories */}
      <section className="py-14 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#121212]">
        {["Men", "Women", "Electronics"].map((cat, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-2">{cat}</h2>
            <p className="text-gray-400">
              Top collections in {cat.toLowerCase()} wear & more.
            </p>
          </div>
        ))}
      </section>
      {/* Luxora Cinematic Video Section */}
      <section className="relative w-full h-[70vh] overflow-hidden my-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/6982707/6982707-uhd_1920_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Optional Dark Overlay */}
        <div className="absolute inset-0  bg-opacity-50 z-10"></div>

        {/* Overlay Text (Optional) */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wider">
            Redefining Elegance
          </h2>
          <p className="text-gray-300 text-lg max-w-xl">
            Step into the world of style, curated for the bold and the refined.
          </p>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-14 px-6 bg-black">
        {/* Featured Products */}
        <section className="py-16 px-6 bg-[#121212]">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-[#1E1E1E] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-400">
                      {product.description.slice(0, 60)}...
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[#F05941] font-semibold">
                      ₹{product.price}
                    </span>
                    <Link to={`/product/${product.id}`}>
                      <button className="bg-[#BE3144] hover:bg-[#F05941] px-3 py-1 rounded-full text-sm flex items-center gap-1 transition">
                        <ShoppingCartIcon fontSize="small" />
                        Buy
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      {/* Newsletter */}
      <section className="py-16 px-6 bg-[#121212] text-center">
        <h2 className="text-3xl font-extrabold mb-4 tracking-wide text-white">
          Get the Latest Deals!
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-lg">
          Subscribe to unlock early access to exclusive offers and new arrivals.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg w-[280px] bg-[#1F1F1F] text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#F05941]"
          />
          <button className="px-6 py-3 bg-[#F05941] text-white font-semibold rounded-lg hover:bg-[#BE3144] transition duration-300">
            Subscribe
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center text-sm text-gray-400">
        <p>
          &copy; 2025{" "}
          <span className="text-white font-semibold tracking-wide">Luxora</span>
          . All rights reserved.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-gray-500">
          <a href="#" className="hover:text-white transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Terms
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
