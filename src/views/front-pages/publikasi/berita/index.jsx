'use client'
import ComingSoon from '@/views/ComingSoon'
import HeroSection from './HeroSection'
import { NewsCard } from './NewsCard'
import { SearchSection } from './SearchSection'
import { NewsList } from './NewsList'
import ContactUs from '../../landing-page/ContactUs'

const BeritaWrapper = () => {
  return (
    <div className='bg-backgroundPaper'>
      <HeroSection />
      <main>
        <SearchSection />
        <NewsList />
        <ContactUs />
      </main>
    </div>
  )
}

export default BeritaWrapper
