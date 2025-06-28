import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Glowing Aura */}
      <div className="absolute top-20 w-72 h-72 md:w-96 md:h-96 bg-[#BE3144] opacity-20 rounded-full blur-3xl z-0"></div>

      <div className="relative">
        <div className="absolute -inset-2 bg-[#BE3144] opacity-20 rounded-[24px] blur-2xl z-0"></div>
        <img
          src="Afrid.jpeg"
          alt="Shaik Afrid"
          className="relative z-10 w-60 h-72 md:w-72 md:h-80 object-cover rounded-[20px] border-4 border-[#BE3144] shadow-xl hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Name and Title */}
      <h1 className="z-10 text-3xl md:text-5xl font-extrabold text-[#F05941] mb-2 text-center tracking-wide">
        Shaik Afrid
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-6 z-10 font-medium">
        Frontend Developer | UI Engineer | Open for Collaborations & Freelance
      </p>

      {/* Bio */}
      <div className="max-w-3xl text-center text-gray-400 mb-10 leading-relaxed z-10 text-base md:text-lg">
        <p className="mb-4">
          I specialize in building modern, responsive, and accessible user
          interfaces using HTML, CSS, JavaScript, and React. My focus is on
          delivering seamless user experiences through clean code and thoughtful
          design.
        </p>
        <p>
          I’m currently working on elevating my craft by exploring performance
          optimization, design systems, and scalable component architecture.
          Whether you're building a startup, scaling a product, or looking for a
          collaborative dev — I’m open to freelance opportunities and creative
          partnerships.
        </p>
        <p className="text-sm text-gray-500 mt-6 italic">
          Tech stack: React · Tailwind CSS · Redux · JavaScript · Git · APIs
        </p>
      </div>

      {/* Contact Icons */}
      <div className="flex gap-8 justify-center text-2xl text-white z-10">
        <a
          href="mailto:shaikafrid500@gmail.com"
          className="hover:text-[#F05941] transition transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/ShaikAfrid1"
          className="hover:text-[#F05941] transition transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/afrid-shaik-7169521a0/"
          className="hover:text-[#F05941] transition transform hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Tagline */}
      <p className="mt-12 text-sm italic text-gray-500 animate-pulse z-10">
        Building polished frontends with purpose and precision.
      </p>
    </div>
  );
};

export default About;
