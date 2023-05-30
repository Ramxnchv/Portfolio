import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='flex min-h-screen flex-col p-24'>
        <div>
          <h1 className='text-slate-900 flex items-center font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white'>
            <span>Ramón Rosa</span>
          </h1>
          <div className='flex text-2xl'>
            <span>&gt; </span>
            <div className='bl-thick-solid' />
            <p className='ml-2 text-slate-600 max-w-3xl mx-auto dark:text-slate-400'>
              <span>Desarrollador Fullstack </span>
              <span className='animate-ping'>_</span>
            </p>  
          </div>
        </div>

      </header>
      <main className="flex min-h-screen flex-col items-center p-24">



      </main>
    </>
  )
}
