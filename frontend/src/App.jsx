import { useEffect } from "react";
import { asyncGetUsers } from "../src/store/UserActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(data);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, [dispatch]);

  return (
    <div className="bg-black h-screen w-screen font-black text-white">App</div>
  );
};

export default App;
