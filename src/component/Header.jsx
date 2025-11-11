import React from "react";

function Header() {
  return (
    <>
      <div className="bg-black text-white shadow-lg">
        <div className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Drink Bar</h1>
              <p className="mt-2 text-sm">Recommed alcohol</p>
            </div>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li><a href="#home" className='hover:text-gray-500 transition'>Home</a></li>
                <li><a href="#about" className='hover:text-gray-500 transition'>About</a></li>
                <li><a href="#contact" className='hover:text-gray-500 transition'>Contact</a></li>
              </ul>
            </nav>  
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;