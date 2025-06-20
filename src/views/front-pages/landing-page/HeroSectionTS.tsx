import { useEffect, useRef } from 'react'

export const HeroSectionTS = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error)
      })
    }
  }, [])

  return (
    <section id='home' className='relative h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-black/40 z-10'></div>

      <video ref={videoRef} className='absolute inset-0 w-full h-full object-cover' autoPlay muted loop playsInline>
        <source
          src='https://player.vimeo.com/external/342333493.sd.mp4?s=76c3c9e8b8e45e1fc003e1f5d4e14b3ec9a1ab9b&profile_id=165&oauth2_token_id=57447761'
          type='video/mp4'
        />
      </video>

      <div className='relative z-20 text-center text-white px-4 max-w-4xl mx-auto'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 animate-fade-in'>Heritage Museum</h1>
        <p className='text-xl md:text-2xl mb-8 opacity-90 animate-fade-in' style={{ animationDelay: '0.5s' }}>
          Discover the stories that shaped our world through timeless artifacts and immersive exhibitions
        </p>
        <div className='space-x-4 animate-fade-in' style={{ animationDelay: '1s' }}>
          <a
            href='#about'
            className='inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200'
          >
            Explore Now
          </a>
          <a
            href='#gallery'
            className='inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200'
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
