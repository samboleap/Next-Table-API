import Head from 'next/head'
import Layout from '@/components/layout'
import { Inter } from 'next/font/google'
import TbComponents from '@/pages/product/tbproducts'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <TbComponents/>
    </>
  )
}
