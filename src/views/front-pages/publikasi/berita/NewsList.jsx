import React from 'react'

import { NewsCard } from './NewsCard'

const newsData = [
  { title: 'Judul Berita', year: 'Tahun Berita', media: 'Media' },
  { title: 'Judul Berita', year: 'Tahun Berita', media: 'Media' },
  { title: 'Judul Berita', year: 'Tahun Berita', media: 'Media' },
  { title: 'Judul Berita', year: 'Tahun Berita', media: 'Media' },
  { title: 'Judul Berita', year: 'Tahun Berita', media: 'Media' }
]

export const NewsList = () => {
  return (
    <section className='w-full p-5'>
      {newsData.map((news, index) => (
        <NewsCard key={index} title={news.title} year={news.year} media={news.media} />
      ))}
    </section>
  )
}
