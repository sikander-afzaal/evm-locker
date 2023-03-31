import { useEffect, useState } from "react";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  useEffect(() => {
    const scrollBg = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(true);
      }
    };
    window.addEventListener("scroll", scrollBg);
    return () => {
      window.removeEventListener("scroll", scrollBg);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed top-0 left-0 py-5 z-50 transition-all duration-300 ${
        headerBg ? "bg-black" : "bg-transparent"
      }`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="xl:hidden block fixed top-0 left-0 w-full h-full z-[88] cursor-pointer bg-gold opacity-70"
        ></div>
      )}
      <div className="flex w-[90%] max-w-[1386px] justify-between items-center">
        <img
          src="/logo.png"
          className="w-[200px] xl:w-[259px] object-contain"
          alt=""
        />
        <nav
          className={`xl:static fixed w-full max-w-none  sm:max-w-[450px] h-full xl:w-auto xl:max-w-none xl:h-auto top-0 ${
            headerToggle ? "right-0" : "-right-[700px]"
          } z-[90] flex justify-start items-center sm:items-start xl:flex-row flex-col pt-[6rem] px-[3rem] transition-all duration-700 pb-[3rem] xl:p-0 bg-black xl:bg-transparent xl:items-center gap-6`}
        >
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="border border-solid border-gold rounded-full min-w-[120px] px-4 py-2 text-white font-medium hover:bg-gold hover:text-black grid place-items-center transition-all duration-500"
          >
            Home
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="border border-solid border-gold rounded-full min-w-[120px] px-4 py-2 text-white font-medium hover:bg-gold hover:text-black grid place-items-center transition-all duration-500"
          >
            Token Vesting
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="border border-solid border-gold rounded-full min-w-[120px] px-4 py-2 text-white font-medium hover:bg-gold hover:text-black grid place-items-center transition-all duration-500"
          >
            Liquidity Locker
          </a>
          <a
            onClick={() => setHeaderToggle(false)}
            href="#"
            className="border border-solid border-gold rounded-full min-w-[120px] px-4 py-2 text-white font-medium hover:bg-gold hover:text-black grid place-items-center transition-all duration-500"
          >
            Contact
          </a>
          <button className="border hover:bg-transparent hover:text-white transition-all duration-500 bg-gold border-solid border-gold rounded-full min-w-[120px] px-4 py-2 text-black font-medium">
            Connect Wallet
          </button>
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 relative z-[91] xl:hidden block cursor-pointer h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 relative z-[91] xl:hidden block cursor-pointer h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
