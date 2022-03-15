import Head from 'next/head'
import { useRouter } from 'next/router'

const Projects = ({ data }) => {
    const router = useRouter()
  return (
    <div className='max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto p-2'>
        <Head>
        <title>Adeyombo Adekoyejo | Projects </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <button 
            className='underline text-xl  mb-4 cursor-pointer hover:text-gray-400'
            onClick={() => router.push('/')}            
        >
            Home
        </button>

        <h2>Projects</h2>

        <div>
            {
              data.map((item) => (
                <div>
                  <img src={item.img} className='w-[26rem]' />
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Projects

export async function getServerSideProps(ctx) {
  const data = await fetch('https://jsonkeeper.com/b/6BSP').then(res => res.json());

  return {
    props: {
      data,
    }
  }
}