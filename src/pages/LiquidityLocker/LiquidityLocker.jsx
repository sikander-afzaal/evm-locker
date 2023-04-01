import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

const LiquidityLocker = () => {
  const [lpPair, setLpPair] = useState(10);
  const [lockVal, setLockVal] = useState(10);
  return (
    <div className="wrapper">
      <div className="contain lg:flex-row flex-col justify-between items-center lg:items-stretch pb-[60px] lg:gap-8 gap-12 pt-[120px] sm:pt-[150px] ">
        <div className="flex w-full lg:w-auto justify-center lg:justify-between items-center lg:text-left text-center sm:items-start flex-col">
          <div className="flex lg:block flex-col justify-center items-center w-full">
            <h2 className="text-white text-[26px] sm:text-[35px] font-medium border-2 border-solid border-gold rounded-full  px-12 py-5 sm:py-6 leading-[1] w-full sm:w-max">
              Liquidity Locker
            </h2>
            <p className="text-white text-l max-w-[450px] mt-7">
              Lock Liquidity tokens. Supports multi EVM blockchains and will
              continue to add to the list of new chains as we see neccasary
            </p>
          </div>
          <div className="flex justify-center w-full lg:w-auto mt-5 lg:mt-0 lg:justify-start items-center cursor-pointer gap-4">
            <img src="/contact.png" className="object-contain" alt="" />
            <p className="text-white text-lg font-medium">Need Help?</p>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col gap-3 w-full max-w-full lg:max-w-[600px]">
          <div className="flex justify-start items-start flex-col gap-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-3">
              <p className="font-semibold bg-goldGr rounded-full grid place-items-center text-white text-lg w-full h-[46px]">
                New Token Lock
              </p>
              <p className="font-semibold bg-goldGr rounded-full grid place-items-center text-white text-lg w-full h-[46px]">
                My Locks
              </p>
              <p className="font-semibold bg-goldGr rounded-full grid place-items-center text-white text-lg w-full h-[46px]">
                All Locks
              </p>
            </div>
            <p className="w-full h-[60px] text-black text-lg font-semibold flex justify-center sm:justify-start items-center px-8 rounded-full bg-gold">
              LP Pair Adresses
            </p>
          </div>
          <div className="w-full bg-gold flex justify-start items-start flex-col gap-4 p-5 rounded-2xl">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-lg font-semibold text-black">
                LP Pair Amount
              </h3>
              <h3 className="text-lg font-medium text-black">Balance</h3>
            </div>
            <div className="w-full flex justify-start items-start gap-2">
              <div className="flex justify-start items-start flex-col gap-4 w-full">
                <Slider
                  onChange={(nextValues) => setLpPair(nextValues)}
                  value={lpPair}
                  min={0}
                  max={100}
                  defaultValue={0}
                  step={1}
                />
                <div className="hidden sm:flex flex-row justify-between items-center gap-2 w-full">
                  <button
                    onClick={() => setLpPair(25)}
                    className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
                  >
                    25%
                  </button>
                  <button
                    onClick={() => setLpPair(50)}
                    className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
                  >
                    50%
                  </button>
                  <button
                    onClick={() => setLpPair(75)}
                    className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
                  >
                    75%
                  </button>
                  <button
                    onClick={() => setLpPair(100)}
                    className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
                  >
                    100%
                  </button>
                </div>
              </div>
              <p className="text-black min-w-[45px] ml-2 text-center text-lg font-semibold">
                {lpPair}%
              </p>
            </div>
            <div className="flex sm:hidden flex-col justify-between items-center gap-2 w-full">
              <button
                onClick={() => setLpPair(25)}
                className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
              >
                25%
              </button>
              <button
                onClick={() => setLpPair(50)}
                className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
              >
                50%
              </button>
              <button
                onClick={() => setLpPair(75)}
                className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
              >
                75%
              </button>
              <button
                onClick={() => setLpPair(100)}
                className="bg-goldGr text-cream sm:w-auto w-full text-lg font-semibold rounded-xl px-5 py-2"
              >
                100%
              </button>
            </div>
          </div>
          <div className="w-full bg-gold flex justify-start items-start flex-col gap-4 p-5 rounded-2xl">
            <div className="flex justify-between sm:flex-row flex-col items-start  sm:items-center w-full">
              <h3 className="text-base sm:text-lg font-semibold text-black">
                Lock Period 2023-04-01 14:21
              </h3>
              <h3 className="text-base sm:text-lg font-medium text-black">
                Months
              </h3>
            </div>
            <div className="w-full flex justify-start items-start gap-2">
              <div className="flex justify-start items-start flex-col gap-4 w-full">
                <Slider
                  onChange={(nextValues) => setLockVal(nextValues)}
                  value={lockVal}
                  min={0}
                  max={100}
                  defaultValue={0}
                  step={1}
                />
                <div className="hidden sm:flex flex-row  justify-between items-center gap-2 w-full">
                  <button
                    onClick={() => setLockVal(25)}
                    className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
                  >
                    3 Months
                  </button>
                  <button
                    onClick={() => setLockVal(50)}
                    className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
                  >
                    6 Months
                  </button>
                  <button
                    onClick={() => setLockVal(75)}
                    className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
                  >
                    1 Year
                  </button>
                  <button
                    onClick={() => setLockVal(100)}
                    className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
                  >
                    5 Years
                  </button>
                </div>
              </div>
              <p className="text-black min-w-[45px] ml-2 text-center text-lg font-semibold">
                {lockVal}%
              </p>
            </div>
            <div className="flex sm:hidden flex-col  justify-between items-center gap-2 w-full">
              <button
                onClick={() => setLockVal(25)}
                className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
              >
                3 Months
              </button>
              <button
                onClick={() => setLockVal(50)}
                className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
              >
                6 Months
              </button>
              <button
                onClick={() => setLockVal(75)}
                className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
              >
                1 Year
              </button>
              <button
                onClick={() => setLockVal(100)}
                className="bg-goldGr text-cream text-lg font-semibold sm:w-auto w-full rounded-xl px-5 py-2"
              >
                5 Years
              </button>
            </div>
          </div>
          <p className="text-white font-bold text-lg">Flat Fee 0.05 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default LiquidityLocker;
