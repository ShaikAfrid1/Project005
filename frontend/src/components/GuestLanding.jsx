import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const videos = [
  "https://videos.pexels.com/video-files/6982938/6982938-uhd_1920_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/3402513/3402513-uhd_2732_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/8047351/8047351-hd_1920_1080_25fps.mp4",
];

const GuestLanding = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {videos.map((src, i) => (
        <video
          key={i}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      <div className="absolute inset-0  bg-opacity-70 z-10" />

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to Luxora
        </h1>
        <p className="text-gray-300 text-lg max-w-xl">
          Please log in to explore our curated collections and experience luxury
          like never before.
        </p>
        <Link
          to="/login"
          className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition duration-300"
        >
          Login to Enter
        </Link>
      </div>
    </div>
  );
};

export default GuestLanding;
