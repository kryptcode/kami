import Head from 'next/head'
import Backpack from '../components/Backpack'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projects from '../components/Projects'


export default function Home() {

  return (
    <div className="">
      <Head>
        <title> Adekoyejo | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Backpack />
      <Projects />
      <Footer />
    </div>
  )
};
