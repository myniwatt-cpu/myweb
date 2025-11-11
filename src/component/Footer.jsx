import React from 'react'

function Footer() {
  return (
    <>
      <footer className='bg-gray-600 text-white shadow-inner pt-10 py-20'>
        <div className='flex flex-col md:flex-row justify-between gap-8 mx-auto max-w-6xl'>
            {/* 1  */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Khing Restaurant</h1>
                <p>Recommend Thai Foods For Thai and foreign people</p>
            </div>
            {/* 2 */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>About</h1>
                <p>For Thai or Foreign people who interesting in Thai Foods</p>
            </div>
            {/* 3 */}
            <div className='flex-1'>
                <h1 className='font-bold text-xl'>Contact</h1>
                <p>Email: tanaporn7249.kk@gmail.com</p>
                <p>Instragram: tnap_jpat</p>
                <p>Facebook: Thanaporn Jampathip</p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer