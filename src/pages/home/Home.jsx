const Home = () => {
  return (
    <section className="wrapper">
      <div className="contain lg:flex-row flex-col justify-between pb-[50px] gap-10 pt-[120px] lg:pt-[70px] min-h-[650px] lg:h-screen items-center lg:gap-4">
        <div className="flex justify-start items-center flex-col gap-10">
          <div className="flex justify-start items-start flex-col  border-4 rounded-xl border-solid border-gold px-4 py-6">
            <div className="flex justify-start items-start flex-col isolate relative gap-5">
              <div className="absolute left-[8px] -translate-x-1/2 -z-10 top-[8px] bg-gold w-[4px] h-[85%] sm:h-[90%]"></div>
              <p className="flex justify-start items-center gap-3 text-white text-base sm:text-lg font-semibold">
                {" "}
                <div className="bg-gold w-4 max-w-4 min-w-4 border border-solid border-black aspect-square rounded-full"></div>{" "}
                Intelligent Liquidity Locker
              </p>
              <p className="flex justify-start items-center gap-3 text-white text-base sm:text-lg font-semibold">
                {" "}
                <div className="bg-gold w-4 max-w-4 min-w-4 border border-solid border-black aspect-square rounded-full"></div>{" "}
                Multi EVM Chain Compatible
              </p>
              <p className="flex justify-start items-center gap-3 text-white text-base sm:text-lg font-semibold">
                {" "}
                <div className="bg-gold w-4 max-w-4 min-w-4 border border-solid border-black aspect-square rounded-full"></div>{" "}
                Rewards, Reflections and Rebase Friendly
              </p>
              <p className="flex justify-start items-center gap-3 text-white text-base sm:text-lg font-semibold">
                {" "}
                <div className="bg-gold w-4 max-w-4 min-w-4 border border-solid border-black aspect-square rounded-full"></div>{" "}
                Easy To Use Interface and Lock Scheduling
              </p>
            </div>
          </div>
          <button className="border hover:bg-transparent hover:text-white transition-all duration-500 bg-gold border-solid border-gold rounded-full min-w-[120px] px-8 py-3 text-black font-semibold">
            Get Started
          </button>
        </div>
        <img
          src="/landing.png"
          className="object-contain min-h-[400px] w-full max-w-[400px] xl:max-w-none xl:w-auto xl:h-[70vh]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
