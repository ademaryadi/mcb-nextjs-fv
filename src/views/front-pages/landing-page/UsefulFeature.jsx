// React Imports
import { useEffect, useRef } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useIntersection } from '@/hooks/useIntersection'

// SVG Imports
import Paper from '@assets/svg/front-pages/landing-page/Paper'
import Check from '@assets/svg/front-pages/landing-page/Check'
import User from '@assets/svg/front-pages/landing-page/User'
import LaptopCharging from '@assets/svg/front-pages/landing-page/LaptopCharging'
import Rocket from '@assets/svg/front-pages/landing-page/Rocket'
import Document from '@assets/svg/front-pages/landing-page/Document'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

// Data
const feature = [
  {
    icon: <LaptopCharging color='var(--mui-palette-primary-main)' />,
    title: 'Quality Code',
    description: 'Code structure that all developers will easily understand and fall in love with.'
  },
  {
    icon: <Rocket color='var(--mui-palette-primary-main)' />,
    title: 'Continuous Updates',
    description: 'Free updates for the next 12 months, including new demos and features.'
  },
  {
    icon: <Paper color='var(--mui-palette-primary-main)' />,
    title: 'Stater-Kit',
    description: 'Start your project quickly without having to remove unnecessary features.'
  },
  {
    icon: <Check color='var(--mui-palette-primary-main)' />,
    title: 'API Ready',
    description: 'Just change the endpoint and see your own data loaded within seconds.'
  },
  {
    icon: <User color='var(--mui-palette-primary-main)' />,
    title: 'Excellent Support',
    description: 'An easy-to-follow doc with lots of references and code examples.'
  },
  {
    icon: <Document color='var(--mui-palette-primary-main)' />,
    title: 'Well Documented',
    description: 'An easy-to-follow doc with lots of references and code examples.'
  }
]

const UsefulFeature = () => {
  // Refs
  const skipIntersection = useRef(true)
  const ref = useRef(null)

  // Hooks
  const { updateIntersections } = useIntersection()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (skipIntersection.current) {
          skipIntersection.current = false

          return
        }

        updateIntersections({ [entry.target.id]: entry.isIntersecting })
      },
      { threshold: 0.35 }
    )

    ref.current && observer.observe(ref.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='about' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h2 className='text-4xl md:text-5xl font-bold text-foreground'>Museum dan Cagar Budaya</h2>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Museum dan Cagar Budaya merupakan Badan Layanan Umum (BLU) di bawah naungan Kementerian Kebudayaan
              Republik Indonesia yang saat ini bertanggung jawab atas pengelolaan 18 museum dan galeri serta 34 situs
              cagar budaya nasional di Indonesia. Museum dan Cagar Budaya Terbentuk pada tahun 2022 dan diresmikan
              menjadi BLU per tanggal 1 September 2023.
            </p>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Museum dan Cagar Budaya memiliki visi untuk menjadi institusi yang bersifat kolaboratif dan mendorong daya
              cipta, perubahan sosial, serta pembangunan masyarakat yang berbudaya.
            </p>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Museum dan Cagar Budaya mengedepankan peningkatan pelayanan yang berbasis perlindungan sebagai prioritas
              utama.
            </p>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Museum dan Cagar Budaya merangkul kreativitas dan mengusung semangat kolaborasi yang inklusif, Museum dan
              Cagar Budaya secara kolektif berkontribusi untuk membuka wawasan apresiasi mendalam terhadap warisan
              budaya Indonesia yang beragam.
            </p>
            <div className='grid grid-cols-4 gap-3 pt-3'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>18</div>
                <div className='text-sm text-muted-foreground'>Museum</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>100+</div>
                <div className='text-sm text-muted-foreground'>Koleksi</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>130+</div>
                <div className='text-sm text-muted-foreground'>Tahun Sejarah</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary'>32</div>
                <div className='text-sm text-muted-foreground'>Cagar Budaya</div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img
              src='/images/front-pages/landing-page/20250521_145040.jpg'
              alt='Museum Interior'
              className='rounded-lg shadow-2xl w-full h-[500px] object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UsefulFeature
