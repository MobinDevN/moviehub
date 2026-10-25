import React from "react";

function Navbar() {
  return (
    <>
      <header className="bg-[#151925] py-4 px-6 flex justify-between items-center">
        {/* Brand and Navigation Bar */}
        <div className="flex gap-15 items-center">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 bg-[#8B5CF6] rounded-xl text-[#F8FAFC] text-4xl flex items-center justify-center">
              <i className="fa-brands fa-imdb"></i>
            </div>
            <h1 className="text-[#F8FAFC] text-2xl font-bold">MovieHub</h1>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-5 text-[#F8FAFC] text-md">
              <li>
                <a
                  href="#"
                  className="hover:text-[#22D3EE] transition-all duration-200 hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#22D3EE] transition-all duration-200 hover:underline"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#22D3EE] transition-all duration-200 hover:underline"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#22D3EE] transition-all duration-200 hover:underline"
                >
                  Newest Movies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="p-2 text-[#F8FAFC] text-lg cursor-pointer">
            <i className="fa-regular fa-heart"></i>
          </button>

          <button className="p-2 text-[#F8FAFC] text-lg cursor-pointer">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button className="p-2 text-[#F8FAFC] bg-[#8B5CF6] text-md rounded-md cursor-pointer">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Login | Register
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
