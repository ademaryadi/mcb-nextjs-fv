// Component Imports
import Agenda from '@views/front-pages/Agenda'

// Data Imports
import { getPricingData } from '@/app/server/actions'

const AgendaPage = async () => {
  // Vars
  const data = await getPricingData()

  return <Agenda data={data} />
}

export default AgendaPage
