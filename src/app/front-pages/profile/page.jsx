// Component Imports
import Profile from '@views/front-pages/profile'

// Data Imports
import { getPricingData } from '@/app/server/actions'

const ProfilePage = async () => {
  // Vars
  const data = await getPricingData()

  return <Profile data={data} />
}

export default ProfilePage
