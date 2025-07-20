import { slidesQuery } from '@/app/server/actions'
import ProfilLembagaWrapper from '@/views/front-pages/tentang-kami/profil-lembaga'

const slides = await slidesQuery()

export default function ProfilLembaga() {
  return (
    <div className='bg-backgroundPaper'>
      <ProfilLembagaWrapper slides={slides.rows} />
    </div>
  )
}
