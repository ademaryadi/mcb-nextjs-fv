import React from 'react'

// import { ContactForm } from './ContactForm'

const MainContent = () => {
  return (
    <main className='absolute flex flex-col items-center top-[50%]'>
      <h1 className='text-black text-center text-5xl font-bold leading-[1.2]x self-center ml-4x mt-10 max-md:max-w-full max-md:text-[40px] max-md:mt-10'>
        <span className='font-normal'>Punya </span>Pertanyaan?
      </h1>
      <p className='text-black text-center text-4xl font-normal self-center mt-5 max-md:max-w-full max-md:text-3xl max-md:leading-[54px] max-md:mt-10 max-md:mb-2.5'>
        Tinggalkan pesan anda, kami akan segera mengubungi anda kembali.
      </p>

      <div className='w-full max-w-4xl mx-auto mt-20 px-4'>{/* <ContactForm /> */}</div>
    </main>
  )
}

export default MainContent
