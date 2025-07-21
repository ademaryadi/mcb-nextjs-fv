'use client'

import ContactUs from '../../landing-page/ContactUs'
import HeroSection from '../../landing-page/HeroSection'
import CollectionSection from './CollectionSection'
import ConservationSection from './ConservationSection'
import EducationSection from './EducationSection'
import PartnershipSection from './PartnershipSection'

const Index = ({ slides }) => {
  return (
    <main>
      <HeroSection slides={slides} />
      <CollectionSection />
      <ConservationSection />
      <EducationSection />
      <PartnershipSection />
      <ContactUs />
    </main>
  )
}

export default Index
