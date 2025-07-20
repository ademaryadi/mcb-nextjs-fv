import React, { useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import MainContent from './MainContent'

const slides = [
  {
    type: 'image',
    src: '/images/front-pages/ppid/ppid-hero.png',
    title: 'Museum dan Cagar Budaya',
    subtitle: 'Discover the stories that shaped our world'
  }
]

const HeroContactUs = () => {
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
    <section className='h-screen flex w-full items-start gap-5 text-5xl text-white font-bold text-center flex-wrap justify-center overflow-hidden max-md:max-w-full max-md:text-3xl max-md:mt-5'>
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
      <div className='absolute top-[40%] left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 grid grid-cols-1 gap-y-10'>
        <button className='bg-[rgba(155,133,243,1)] flex flex-col items-stretch justify-center px-10 py-[15px] max-md:max-w-full max-md:text-[40px] max-md:px-5 hover:bg-[rgba(145,123,233,1)] transition-colors'>
          <span className='max-md:text-[40px]'>Hubungi kami</span>
        </button>
      </div>
      <MainContent />
    </section>
  )
}

export default HeroContactUs
