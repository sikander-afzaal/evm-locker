import Header from "./layout/Header";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="isolate w-full min-h-screen bg-bodyGr bg-no-repeat bg-cover relative">
      <div className="bg-black absolute opacity-80 min-h-screen -z-10 w-full left-0 top-0 h-full"></div>
      <Header />
      <Home />
    </div>
  );
};

export default App;
