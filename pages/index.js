import Head from 'next/head'


export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Adeyombo Adekoyejo | Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Showcase */}
      <div className='w-[100%]'>
        <div className='h-[100vh] flex items-center pl-6 sm:pl-24'>
          <div className=''>
            <h5 className='text-gray-200 text-xl mb-3'>
              Hello! I'm
            </h5>
            <h2 className='text-6xl font-semibold mb-3'>
              Adeyombo Adekoyejo,
            </h2>
            <h6 className='text-4xl mb-5 text-gray-300'>
              and I develop web apps.
            </h6>
            <p className='text-xl text-gray-300'>
              I am a self-taught web developer based in Abuja, Nigeria.
            </p>
          </div>
        </div>

        {/* My Backpack */}
        <div className='max-w-5xl mx-auto px-2 mb-28'>
          <h4 className='text-4xl font-semibold mb-3'>My Backpack</h4>
          <p className='text-xl text-gray-300'>
          You can find the list of my top skills below. I'm also open to learn more frontend and backend related frameworks, libraries, languages, etc!
          </p>
          <div className='flex flex-col sm:flex-row space-y-4 md:space-y-0 justify-between mt-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold'>
                Frontend
              </h2>
              <p className='text-gray-300'>
                HTML & CSS
              </p>
              <p className='text-gray-300'>
                Javascript
              </p>
              <p className='text-gray-300'>
                React & Next.js
              </p>
              <p className='text-gray-300'>TailwindCSS</p>
              <p className='text-gray-300'>styled-components</p>
              <p className='text-gray-300'>State Management(Recoil)</p>
            </div>

            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold'>
                Backend
              </h2>
              <p className='text-gray-300'>
                REST APIs
              </p>
              <p className='text-gray-300'>
                Sanity
              </p>
              <p className='text-gray-300'>
                Firebase
              </p>
              <p className='text-gray-300'>
                MongoDB
              </p>
            </div>

            <div className='space-y-2'>
              <h2 className='text-3xl font-semibold'>
                Others
              </h2>
              <p className='text-gray-300'>
                Git & GitHub
              </p>
              <p className='text-gray-300'>Authentication</p>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className='max-w-5xl mx-auto px-2 mb-8'>
          <h3 className='text-3xl mb-5 font-semibold'>Featured Projects</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Github Users</h5>
              <p className='text-lg mb-5'>
                A web app that uses the GitHub users api to search users and display key info.
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/github-users">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1f252e]'>
                  <a target="_blank" href="https://github-users-inky.vercel.app">View Project</a>
                </button>
              </div>
            </div>

            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Twitter Clone</h5>
              <p className='text-lg mb-5'>
                A twitter clone with authentication and tweet functionality.
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/twitter-clone">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://twitter-clone-z.vercel.app">View Project</a>
                </button>
              </div>
            </div>

            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Hulu Clone</h5>
              <p className='text-lg mb-5'>
                A web app that uses the TMDB api to showcase trending movies.
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/hulu-clone">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1f252e]'>
                  <a target="_blank" href="https://hulu-clone-rose-nine.vercel.app">View Project</a>
                </button>
              </div>
            </div>

            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Airbnb Clone</h5>
              <p className='text-lg mb-5'>
                
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/airbnb-clone">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1f252e]'>
                  <a target="_blank" href="https://airbnb-clone-zeta-nine.vercel.app/">View Project</a>
                </button>
              </div>
            </div>

            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Google Search</h5>
              <p className='text-lg mb-5'>
                A google clone with search engine functionality.
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/github-users">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1f252e]'>
                  <a target="_blank" href="https://google-search-je2ewr8em-kryptcode.vercel.app">View Project</a>
                </button>
              </div>
            </div>

            <div className='bg-[#242c38] rounded-lg p-5'>
              <h5 className='text-xl font-semibold mb-3'>Advice Generator</h5>
              <p className='text-lg mb-5'>
                A web app that displays different pieces of advice from the Advice Slip Api
              </p>
              <div className='flex space-x-6'>
                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1e232b]'>
                  <a target="_blank" href="https://github.com/kryptcode/advice-generator">View Code</a>
                </button>

                <button className='bg-[#1f252e] p-2 rounded-xl hover:bg-[#1f252e]'>
                  <a target="_blank" href="https://advice-generator-five.vercel.app">View Project</a>
                </button>
              </div>
            </div>
          </div>
          
        </div>

        <footer className='max-w-5xl mx-auto px-2 mb-5'>
          <h4 className='text-4xl mb-5'>Contact Me</h4>
          <a href="https://github.com/kryptcode" target="_blank" className='text-3xl underline'>GitHub</a>
          <div className='mt-2'>
            <a href="mailto: adeyombokehd@gmail.com" target="_blank" rel='noreferrer' className='text-3xl underline'>
              Email
            </a>
          </div>
        </footer>


      </div>
    </div>
  )
};