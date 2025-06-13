'use client'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Features from '../components/Features'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lona + | Lonas Sob Medida - LONIL e Lona Leve</title>
        <meta name="description" content="Lona + oferece lonas sob medida de alta qualidade. LONIL e Lona Leve para suas necessidades específicas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Hero />
      <Products />
      <Features />
      <Contact />
      <Map />
      <Footer />
    </>
  )
}