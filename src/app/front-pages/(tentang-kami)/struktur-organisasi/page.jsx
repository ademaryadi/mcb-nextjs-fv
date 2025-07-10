import StrukturOrganisasiWrapper from '@/views/front-pages/tentang-kami/struktur-organisasi'
import { getServerMode } from '@core/utils/serverHelpers'

const StrukturOrganisasi = async () => {
  const mode = await getServerMode()

  return <StrukturOrganisasiWrapper />
}

export default StrukturOrganisasi
