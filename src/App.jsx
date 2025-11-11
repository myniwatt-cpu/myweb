import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import beers from "./data/Beers.js";
import Card from "./component/Card";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-auto">
          <section className="flex flex-col justify-center bg-gradient-to-r from-blue-600 to-purple-400 text-white min-h-full py-37">
            <div className="container mx-auto px-4 text-center py-20">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Our Website
              </h1>
              <p className="text-2xl mb-8">
                Recommed 20 Beers Let's View
              </p>
              <button className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:bg-black transition hover:text-white">
                Views
              </button>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gray-800">
                  Welcome to Our Website
                  <p className="text-gray-600 text-lg mt-2">
                    20 Beers
                  </p>
                </h2>
              </div>

              <div className='flex flex-wrap justify-center gap-14'>
                {beers.map((b) => (
                  <Card 
                  key={b.id}
                  image={b.image}
                  name={b.name}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;