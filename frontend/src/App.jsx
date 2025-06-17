import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className="bg-[#22092C] p-5 h-screen w-screen  text-white font-black">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
