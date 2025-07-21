'use client'
import React, { useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    type: 'image',
    src: '/images/front-pages/ppid/ppid-hero.png',
    title: 'Museum dan Cagar Budaya',
    subtitle: 'Discover the stories that shaped our world'
  }
]

const HeroSection = () => {
  const videoRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (videoRef.current && slides[currentSlide].type === 'video') {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error)
      })
    }
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className='h-screen flex flex-col w-full overflow-hidden max-md:max-w-full max-md:pb-[100px] max-md:px-5'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video className='absolute inset-0 w-full h-full' autoPlay muted loop playsInline>
              <source src={slide.src} type='video/mp4' />
            </video>
          ) : (
            <img src={slide.src} alt={slide.title} className='absolute inset-0 w-full h-full' />
          )}
        </div>
      ))}

      <button
        onClick={prevSlide}
        className='absolute left-8 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 transition-colors'
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-8 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 rounded-full p-3 transition-colors'
      >
        <ChevronRight size={24} />
      </button>

      <div className='relative px-10 flex w-full items-center gap-5 text-white font-bold text-center flex-wrap justify-center mt-[149px]x top-1/4 max-md:max-w-full max-md:mt-10 max-md:mb-2.5'>
        <div className='self-stretch flex flex-col items-stretch max-md:max-w-full'>
          <h1 className='text-5xl leading-none self-center max-md:max-w-full max-md:text-3xl'>Sentra Berita</h1>
          <p className='text-3xl leading-[58px] mt-8 max-md:max-w-full max-md:mt-10 max-md:text-2xl'>
            Sebagai wujud transparansi Museum & Cagar Budaya ( IHA/Indonesian Heritage Agency), kami menyediakan laman
            publikasi media yang dapat diakses dan diunggah secara publik
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
