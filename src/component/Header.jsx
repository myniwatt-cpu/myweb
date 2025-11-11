import React from "react";

function Header() {
  return (
    <>
      <div className="bg-blue-700 text-white shadow-lg">
        <div className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Khing Restaurant</h1>
              <p className="mt-2 text-sm">Recommed Thai Foods</p>
            </div>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li><a href="#home" className='hover:text-black transition'>Home</a></li>
                <li><a href="#about" className='hover:text-black transition'>About</a></li>
                <li><a href="#contact" className='hover:text-black transition'>Contact</a></li>
              </ul>
            </nav>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;