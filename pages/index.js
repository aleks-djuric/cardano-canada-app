import Head from 'next/head'

import Meta from '@/components/meta'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import CategorySelector from '@/components/category-selector'
import CardCollage from '@/components/card-collage'

export default function Home() {
  return (
    <>
      <Meta/>
      <Navbar/>
      <Hero/>
      <CategorySelector/>
      <CardCollage/>
    </>
  )
}
