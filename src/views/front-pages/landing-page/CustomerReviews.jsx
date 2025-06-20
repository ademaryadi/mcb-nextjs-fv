// MUI Imports

import { useState } from 'react'

import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'

// Third-party Imports
import { useKeenSlider } from 'keen-slider/react'
import classnames from 'classnames'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
import AppKeenSlider from '@/libs/styles/AppKeenSlider'

// SVG Imports
import HubSpot from '@assets/svg/front-pages/landing-page/HubSpot'
import Pinterest from '@assets/svg/front-pages/landing-page/Pinterest'
import Dribbble from '@assets/svg/front-pages/landing-page/Dribbble'
import Airbnb from '@assets/svg/front-pages/landing-page/Airbnb'
import Coinbase from '@assets/svg/front-pages/landing-page/Coinbase'
import Netflix from '@assets/svg/front-pages/landing-page/Netflix'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'
import styles from './styles.module.css'

// Data

export const CustomerReviews = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: '/images/front-pages/landing-page/Arca Buddha.jpg',
      title: 'Arca Buddha',
      description: 'A serene statue representing peace and enlightenment'
    },
    {
      src: '/images/front-pages/landing-page/Figurin Perunggu.jpg',
      title: 'Figurin Perunggu',
      description: 'Modern technology preserving historical documents'
    },
    {
      src: '/images/front-pages/landing-page/Alusu.jpg',
      title: 'Alusu',
      description: 'Scholars studying historical manuscripts'
    },
    {
      src: '/images/front-pages/landing-page/Gelang Aceh.jpg',
      title: 'Gelang Aceh',
      description: 'Immersive exhibitions with cutting-edge technology'
    },
    {
      src: '/images/front-pages/landing-page/Keris.jpg',
      title: 'Keris',
      description: 'Educational programs and cultural celebrations'
    },
    {
      src: '/images/front-pages/landing-page/Celengan.jpg',
      title: 'Celengan',
      description: 'Visitors engaging with interactive exhibits'
    }
  ]

  return (
    <section id='gallery' className='py-20 bg-muted/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>Gallery</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Explore our exhibitions through this curated collection of images showcasing the beauty and significance of
            our cultural treasures.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {galleryImages.map((image, index) => (
            <div key={index} className='group cursor-pointer' onClick={() => setSelectedImage(index)}>
              <div className='relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105'>
                <img
                  src={image.src}
                  alt={image.title}
                  className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-4 left-4 right-4 text-white'>
                    <h3 className='text-lg font-semibold mb-1'>{image.title}</h3>
                    <p className='text-sm opacity-90'>{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div
            className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedImage(null)}
          >
            <div className='relative max-w-4xl max-h-full'>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className='max-w-full max-h-full object-contain rounded-lg'
              />
              <button
                onClick={() => setSelectedImage(null)}
                className='absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors'
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default CustomerReviews
