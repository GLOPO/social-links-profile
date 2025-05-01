/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import profile from '../public/profile1.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <main className='container flex justify-center items-center max-w-[50000px] w-full bg-[#141414] h-screen'>
      <section className='w-[90%] md:w-[38%] lg:w-[29%] flex items-center justify-center flex-col bg-[hsl(0,0%,12%)] p-5 gap-3 rounded-xl'>
        <Image alt='profile-picture' src={profile} className='rounded-full w-[20%]'/>

        <div className='flex flex-col items-center justify-center'>
          <p className='font-bold text-[22px] text-[hsl(0,0%,100%)]'>Glory Uka</p>
          <p className='font-bold text-sm text-[hsl(75,94%,57%)]'>Lagos, Nigeria</p>
        </div>

        <p className='text-sm text-gray-300 font-semibold'>"Front-end developer and avid reader."</p>

        <div className='w-full text-[hsl(0,0%,100%)] flex flex-col gap-3'>
          <Link href={'https://github.com/GLOPO'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>GitHub</Link>
          <Link href={'https://www.frontendmentor.io/profile/GLOPO'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>Frontend Mentor</Link>
          <Link href={'https://www.linkedin.com/in/glory-uka-494b10336/'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>LinkedIn</Link>
          <Link href={'https://x.com/techglory_swe'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>X</Link>
          <Link href={'https://www.instagram.com/glorya_uka/'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>Instagram</Link>
          <Link href={'https://www.techglory-swe.vercel.app'} className='bg-[hsl(0,0%,20%)] text-center font-bold w-full rounded p-2 hover:bg-[hsl(75,94%,57%)] hover:text-[#141414] cursor-pointer'>Portfolio</Link>
        </div>
      </section>
    </main>
  )
}

export default Home