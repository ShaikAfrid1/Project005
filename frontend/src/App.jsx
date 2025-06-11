import { useEffect } from "react";
import { asyncGetUsers } from "../src/store/UserActions";

const App = () => {

  useEffect(() => {
    asyncGetUsers();
  }, []);

  return (
    <div className="bg-black h-screen w-screen font-black text-white">App</div>
  );


};

export default App;
