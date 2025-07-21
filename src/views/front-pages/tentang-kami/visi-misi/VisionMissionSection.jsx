const VisionMissionSection = () => {
  return (
    <section className='bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.25)] w-full mt-10 mb-5 p-5 max-md:max-w-full max-md:mt-10 max-md:pt-[100px]x max-md:px-5'>
      <div className='max-md:max-w-full'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-6/12 max-md:w-full max-md:ml-0'>
            <div className='flex flex-col items-stretch text-black text-center mt-3.5 max-md:max-w-full max-md:mt-10'>
              <h2 className='text-5xl font-bold leading-none self-center max-md:text-3xl'>Visi</h2>
              <p className='text-3xl font-normal leading-10 mt-5 max-md:max-w-full'>
                {
                  'Menjadi ruang jelajah warisan budaya dan sejarah yang bersifat kolaboratif dan mendorong daya cipta, perubahan sosial, serta pembangunan karakter yang berbudaya.'
                }
              </p>
            </div>
          </div>
          <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/visi-misi/visi.png'
              alt='Vision illustration'
              className='aspect-[1.76] object-contain w-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] grow max-md:max-w-full max-md:mt-10'
            />
          </div>
        </div>
      </div>
      <div className='mt-10 max-md:max-w-full max-md:mr-2.5'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-6/12 mt-5 max-md:w-full max-md:ml-0'>
            <img
              src='/images/front-pages/visi-misi/misi.png'
              alt='Mission illustration'
              className='aspect-[1.75] object-contain w-full shadow-[0px_4px_10px_rgba(0,0,0,0.25)] grow max-md:max-w-full max-md:mt-2'
            />
          </div>
          <div className='w-6/12 ml-5 max-md:w-full max-md:ml-0'>
            <div className='flex flex-col items-stretch text-black mt-3.5 max-md:max-w-full max-md:mt-5'>
              <h2 className='text-5xl font-bold leading-none text-center self-center max-md:text-3xl'>MISI</h2>
              <div className='text-2xl font-normal leading-10 mt-5 max-md:max-w-full max-md:mt-10'>
                <ul>
                  <li>Mewujudkan pengelolaan koleksi, cagar budaya, dan bangunan bersejarah yang berkelanjutan</li>

                  <li>Melaksanakan upaya pelayanan dan pelibatan masyarakat secara terpadu</li>
                  <li>
                    Mengedepankan transformasi pengembangan wawasan melalui praktek edukasi yang inovatif dan
                    pembangunan komunitas
                  </li>
                  <li>Menjalin kepercayaan kuat antara para pemangku kepentingan yang berbasis kemitraan</li>
                  <li>Mewujudkan ruang ekspresi dan interaksi budaya yang inklusif dan mudah diakses</li>
                  <li>
                    Mewujudkan tata kelola kelembagaan dan pengelolaan sumber daya manusia yang tangkas dan berorientasi
                    kepada dampak yang berkelanjutan.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
