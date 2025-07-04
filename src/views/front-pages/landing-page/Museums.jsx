import { useState } from 'react'

import { MapPin, Clock, DollarSign, Star } from 'lucide-react'

import Button from '@mui/material/Button'

export const Museums = () => {
  const museums = [
    {
      id: 1,
      name: 'Museum Nasional Indonesia',
      image: '/images/museum/MNI.png',
      location: 'Jl. Medan Merdeka Barat No.12 Gambir, Jakarta Pusat',
      ticketPrice: '$15 - $25',
      operationalHours: 'Selasa - Minggu: 8:00 AM - 8:00 PM',
      rating: 'Jakarta',
      speciality: 'Ancient Civilizations & Archaeological Artifacts',
      description:
        'Museum Nasional, merupakan institusi penting dalam pelestarian dan pemberian wawasan tentang kebudayaan Nusantara. Sejak didirikan pada 1778 sebagai lembaga penelitian dan pengetahuan alam, sejarah, dan sosial budaya oleh Hindia-Belanda (BGKW), museum ini berkembang menjadi museum terbesar di Indonesia.'
    },
    {
      id: 2,
      name: 'Museum Basoeki Abdullah',
      image: '/images/museum/MBA.png',
      location: 'Jl. Keuangan Raya No.19 Cilandak, Jakarta Selatan',
      ticketPrice: '$12 - $20',
      operationalHours: 'Selasa - Minggu: 8:00 AM - 4:00 PM',
      rating: 'Jakarta',
      speciality: 'Interactive Science & Technology Exhibits',
      description:
        'Museum Basoeki Abdullah merupakan bukti nyata nasionalisme seseorang tokoh inspirasi maestro lukis Indonesia, Basoeki Abdullah. Terletak di bilangan Jakarta Selatan, Museum Basoeki Abdullah memiliki 109 koleksi lukisan, 3.070 buku, dan lebih dari 700 koleksi benda seni (wayang kulit, topeng, patung, tekstil, dll). Basoeki Abdullah adalah seorang pelukis terkemuka di Indonesia yang terkenal karena penguasaannya terhadap realisme dan pengaruhnya yang besar dalam kancah seni tanah air.'
    },
    {
      id: 3,
      name: 'Museum Batik Indonesia',
      image: '/images/museum/MBN.png',
      location: 'Taman Mini Indonesia Indah, Ceger, Cipayung, Jakarta Timur',
      ticketPrice: '$18 - $30',
      operationalHours: 'Selasa - Minggu: 8:00 AM - 3:00 PM',
      rating: 'Jakarta',
      speciality: 'Fine Arts & Cultural Heritage',
      description:
        'Batik merupakan warisan budaya nenek moyang yang telah menjadi bagian dari hidup masyarakat sejak lama. Pada 2009, batik ditetapkan sebagai warisan budaya takbenda oleh UNESCO. Selain karena keunikan teknik dan keindahan motifnya, batik diakui sebagai warisan dunia karena di setiap helai kain batik terkandung nilai budaya dan makna filosofis yang berkaitan dengan siklus kehidupan manusia Indonesia.'
    }
  ]

  return (
    <section id='museums' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>Our Museum Network</h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto'>
            Discover our diverse collection of museums, each offering unique experiences and specialized collections to
            satisfy every curiosity and interest.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {museums.map(museum => (
            <div
              key={museum.id}
              className='bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={museum.image}
                  alt={museum.name}
                  className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center'>
                  {/* <span className='w-4 h-4 text-yellow-500 mr-1' /> */}
                  <span className='text-sm font-semibold'>{museum.rating}</span>
                </div>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-bold text-foreground mb-2'>{museum.name}</h3>

                <p className='text-sm text-primary font-medium mb-4'>{museum.speciality}</p>

                <p className='text-muted-foreground text-sm mb-6 leading-relaxed'>{museum.description}</p>

                <div className='space-y-3'>
                  <div className='flex items-start text-sm'>
                    <MapPin className='w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>{museum.location}</span>
                  </div>

                  <div className='flex items-center text-sm'>
                    <DollarSign className='w-4 h-4 text-primary mr-3 flex-shrink-0' />
                    <span className='text-muted-foreground'>{museum.ticketPrice}</span>
                  </div>

                  <div className='flex items-start text-sm'>
                    <Clock className='w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0' />
                    <span className='text-muted-foreground'>{museum.operationalHours}</span>
                  </div>
                </div>

                <div className='mt-6 pt-4 border-t border-border'>
                  {/* <button className='w-full bg-primary text-primary py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors'>
                    Visit Museum
                  </button> */}
                  <Button variant='contained'>Visit Museum</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Museums
