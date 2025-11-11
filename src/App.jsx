import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import foods from "./data/foods.js";
// import Card from "./component/Card";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="mt-auto">
          <section className="flex flex-col justify-center bg-gradient-to-r from-blue-600 to-purple-400 text-white min-h-full py-37">
            <div className="container mx-auto px-4 text-center py-20">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to Khing Restaurant Website
              </h1>
              <p className="text-2xl mb-8">
                Let's we recommend the best thai foods to you
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
                  Welcome to Khing Restaurant
                  <p className="text-gray-600 text-lg mt-2">
                    The Best Foods in Thailand let's try ! !
                  </p>
                </h2>
              </div>

              {/* <div className='flex flex-wrap justify-center gap-14'>
                {foods.map((f) => (
                  <Card 
                  key={f.id}
                  image={f.image}
                  name={f.name}
                  />
                ))}
              </div> */}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;