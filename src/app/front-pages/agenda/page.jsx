// Component Imports
import Agenda from '@views/front-pages/Agenda'

// Data Imports
import { getPricingData, slidesQuery } from '@/app/server/actions'

const slides = await slidesQuery()

const AgendaPage = async () => {
  // Vars
  const data = await getPricingData()

  return <Agenda data={data} slides={slides.rows} />
}

export default AgendaPage
