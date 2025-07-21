'use client'
import Collections from '../../landing-page/Collections'
import ContactUs from '../../landing-page/ContactUs'
import AboutSection from './AboutSection'
import VisionMissionSection from './VisionMissionSection'

const VisiMisiWrapper = () => {
  return (
    <div className='bg-white flex flex-col overflow-hidden items-center pb-5'>
      <AboutSection />
      <Collections />
      <VisionMissionSection />
      <ContactUs />
    </div>
  )
}

export default VisiMisiWrapper
