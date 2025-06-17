import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className="bg-black p-5 h-screen w-screen  text-white">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
