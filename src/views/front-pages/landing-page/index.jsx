'use client'

// React Imports
import { useEffect } from 'react'

// Component Imports
import HeroSection from './HeroSection'
import UsefulFeature from './UsefulFeature'
import CustomerReviews from './CustomerReviews'
import Events from './Events'
import ContactUs from './ContactUs'
import { useSettings } from '@core/hooks/useSettings'
import Museums from './Museums'

const LandingPageWrapper = ({ mode, slides }) => {
  // Hooks
  const { updatePageSettings } = useSettings()

  // For Page specific settings
  useEffect(() => {
    return updatePageSettings({
      skin: 'default'
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='bg-backgroundPaper'>
      <HeroSection mode={mode} slides={slides} />
      <UsefulFeature />
      <CustomerReviews />
      <Events />
      <Museums />
      <ContactUs />
    </div>
  )
}

export default LandingPageWrapper
