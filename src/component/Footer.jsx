import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-gray-600 text-white shadow-inner pt-10 py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mx-auto max-w-6xl'>
            {/* 1  */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Drink Bar Website</h1>
                <p>Recommend for people who love alcohol like me</p>
            </div>
            {/* 2 */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>About</h1>
                <p>i like alcohol</p>
            </div>
            {/* 3 */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Contact</h1>
                <p>Email: myniwatt@gmail.com</p>
                <p>Instragram: nxwt.k</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer