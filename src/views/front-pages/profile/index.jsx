'use client'

// React Imports
import { useEffect } from 'react'

// Component Imports
import Events from './Events'
import { useSettings } from '@core/hooks/useSettings'

const LandingPageWrapper = ({ mode }) => {
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
      {/* <HeroSection mode={mode} /> */}
      {/* <UsefulFeature /> */}
      {/* <CustomerReviews /> */}
      <Events />
      {/* <Museums /> */}
      {/* <OurTeam /> */}
      {/* <Pricing /> */}
      {/* <ProductStat /> */}
      {/* <Faqs /> */}
      {/* <GetStarted mode={mode} /> */}
      {/* <ContactUs /> */}
    </div>
  )
}

export default LandingPageWrapper
