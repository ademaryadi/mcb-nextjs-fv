import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Terima kasih! Pesan Anda telah terkirim.')
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <>
      <div className='bg-[rgba(155,133,243,1)] self-center flex w-[430px] max-w-full flex-col items-stretch text-5xl text-white font-bold text-center leading-[1.2] justify-center mt-[167px] px-12 py-[15px] max-md:text-[40px] max-md:mt-10 max-md:px-5'>
        <h2 className='text-5xl font-bold leading-[57.6px] max-md:text-[40px]'>Hubungi kami</h2>
      </div>
      <h3 className='text-black text-center text-5xl font-bold leading-[57.6px] self-center ml-[26px] mt-16 max-md:max-w-full max-md:text-[40px] max-md:mt-10'>
        <span className='font-normal'>Punya </span>Pertanyaan?
      </h3>
      <p className='text-black text-center text-5xl font-normal leading-[57.6px] self-center w-[1531px] mt-[41px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px] max-md:mt-10'>
        Tinggalkan pesan anda, kami akan segera mengubungi anda kembali.
      </p>
      <section className='self-center w-full max-w-[1631px] ml-[23px] mt-[207px] max-md:max-w-full max-md:mt-10'>
        <div className='gap-5 flex max-md:flex-col max-md:items-stretch'>
          <div className='w-[42%] max-md:w-full max-md:ml-0'>
            <img
              src='https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/93a4312915e9bd959e703b265c597c640febabb4?placeholderIfAbsent=true'
              alt='Contact illustration'
              className='aspect-[0.96] object-contain w-full grow max-md:max-w-full max-md:mt-[37px]'
            />
          </div>
          <div className='w-[58%] ml-5 max-md:w-full max-md:ml-0'>
            <div className='bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full mx-auto pt-16 pb-[35px] px-20 max-md:max-w-full max-md:mt-[35px] max-md:px-5'>
              <img
                src='https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/87df24ae89cfa3037fc913471a43d2554cad4f00?placeholderIfAbsent=true'
                alt='Contact form header'
                className='aspect-[6.37] object-contain w-full max-md:max-w-full'
              />

              {submitMessage && (
                <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className='mt-[52px] max-md:mt-10'>
                <div className='flex items-stretch gap-10 flex-wrap max-md:max-w-full max-md:mr-2.5'>
                  <div className='flex-1 grow shrink-0 basis-0 w-fit'>
                    <img
                      src='https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/ca58e37df320364cd65222e62c559f3c01ac1fc0?placeholderIfAbsent=true'
                      alt='Name field label'
                      className='aspect-[3.33] object-contain w-[120px] max-w-full'
                    />
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='bg-white border w-[363px] shrink-0 max-w-full h-[58px] border-black border-solid px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Masukkan nama Anda'
                    />
                  </div>
                  <div className='flex-1 grow shrink-0 basis-0 w-fit mt-1'>
                    <img
                      src='https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/39bd91df77b07922bd64d6f8971e249e5cad0057?placeholderIfAbsent=true'
                      alt='Email field label'
                      className='aspect-[5.49] object-contain w-[148px] max-w-full'
                    />
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='bg-white border shrink-0 h-[58px] mt-1 border-black border-solid w-full px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Masukkan email Anda'
                    />
                  </div>
                </div>

                <div className='mt-[30px]'>
                  <img
                    src='https://api.builder.io/api/v1/image/assets/10ca0d2b298f4f1b8714bf134b71e9cf/b6b901d5b16d4992bb26390af68c7ca51e0fd161?placeholderIfAbsent=true'
                    alt='Message field label'
                    className='aspect-[3.12] object-contain w-[131px] max-w-full'
                  />
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows='6'
                    className='bg-white border w-[767px] shrink-0 max-w-full h-[162px] border-black border-solid max-md:mr-2.5 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Tulis pesan Anda di sini...'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='mt-10 bg-[#5856D6] text-white px-8 py-3 rounded hover:bg-[#4845C7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
