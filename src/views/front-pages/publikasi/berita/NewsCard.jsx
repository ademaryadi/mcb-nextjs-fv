import React from 'react'

export const NewsCard = ({ title, year, media }) => {
  return (
    <article className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] flex w-full flex-col text-3xl text-black font-bold text-center leading-none mt-5 px-5 py-10 rounded-[40px] max-md:max-w-full max-md:px-5 hover:shadow-[0px_6px_25px_rgba(0,0,0,0.3)] transition-shadow cursor-pointer'>
      <h3 className='ml-6 max-md:ml-2.5'>{title}</h3>
      <div className='shadow-[0px_4px_20px_rgba(0,0,0,0.25)] border self-stretch shrink-0 h-0 mt-5 border-black border-solid max-md:max-w-full max-md:mt-10'>
        <div className='mt-5'>{media}</div>
      </div>
      <div className='flex w-[793px]x max-w-full items-stretch gap-5 flex-wrap justify-between ml-3.5 mt-5 max-md:mt-10'>
        <div>{year}</div>
      </div>
    </article>
  )
}
