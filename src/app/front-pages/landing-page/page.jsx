// Component Imports
import LandingPageWrapper from '@views/front-pages/landing-page'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'
import { slidesQuery } from '@/app/server/actions'

const slides = await slidesQuery()

const LandingPage = async () => {
  // Vars

  const mode = await getServerMode()

  return <LandingPageWrapper mode={mode} slides={slides.rows} />
}

export default LandingPage
