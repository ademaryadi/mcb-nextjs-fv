'use client'

// React Imports
import { useEffect } from 'react'

import Events from './Events'
import Footer from '@components/layout/front-pages/Footer'
import Header from '@components/layout/front-pages/Header'
import { useSettings } from '@core/hooks/useSettings'

const AgendaPage = ({ mode }) => {
  // Hooks
  // const { updatePageSettings } = useSettings()

  // For Page specific settings
  // useEffect(() => {
  //   return updatePageSettings({
  //     skin: 'default'
  //   })
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <div className='bg-backgroundPaper'>
      {/* <h1 className='text-3xl font-bold text-center my-8'>Agenda</h1> */}
      <Events />
    </div>
  )
}

export default AgendaPage
