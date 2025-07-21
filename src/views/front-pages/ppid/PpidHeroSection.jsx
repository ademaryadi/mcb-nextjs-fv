import { useEffect, useRef, useState } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    type: 'image',
    src: '/images/front-pages/ppid/ppid-hero.png',
    title: 'Museum dan Cagar Budaya',
    subtitle: 'Discover the stories that shaped our world'
  }
]

const PpidHeroSection = () => {
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
    <section id='ppid' className='h-screen flex items-end justify-center overflow-hidden pb-8'>
      <div className='absolute inset-0 bg-black/40 z-10 hidden'></div>

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

      <div className='absolute top-[45%] left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 grid grid-cols-1 gap-y-10'>
        <div className='flex justify-center'>
          <button className='text-white bg-[#9B85F3] hover:bg-[rgba(155,133,243,0.9)] hover:cursor-pointer p-5 text-3xl transition-colors'>
            Hubungi Kami
          </button>
        </div>
        <div className='text-4xl text-center text-black'>
          Punya <span className='font-bold'>Pertanyaan?</span>
        </div>
        <div className='text-4xl text-center text-black'>
          Tinggalkan pesan anda, kami akan segera menghubungi anda kembali.
        </div>
      </div>

      <div className='absolute bottom-64 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 hidden'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>

      <div className='relative z-20 text-center text-white px-4 max-w-4xl mx-auto mb-20 hidden'>
        <h1 className='text-5xl font-bold mb-6 animate-fade-in'>{slides[currentSlide].title}</h1>
        <p className='text-xl md:text-2xl mb-8 opacity-90 animate-fade-in' style={{ animationDelay: '1s' }}>
          {slides[currentSlide].subtitle}
        </p>
      </div>
    </section>
  )
}

export default PpidHeroSection
