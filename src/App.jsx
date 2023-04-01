import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import TokenVesting from "./pages/TokenVesting/TokenVesting";
import LiquidityLocker from "./pages/LiquidityLocker/LiquidityLocker";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="isolate w-full min-h-screen bg-bodyGr bg-no-repeat bg-cover relative">
      <div className="bg-black absolute opacity-80 min-h-screen -z-10 w-full left-0 top-0 h-full"></div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<TokenVesting />} path="/token-vesting" />
        <Route element={<LiquidityLocker />} path="/liquidity-locker" />
      </Routes>
    </div>
  );
};

export default App;
