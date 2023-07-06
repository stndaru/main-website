import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from "framer-motion";
import { SocialCard } from "../components/SocialCard"

import { HorizontalLine } from "../components/BackgroundAnimation"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-zinc-950 ${inter.className}`}
    >
      <div className='relative min-w-full min-h-screen'>
        <motion.div 
          className="bg-repeat min-w-full h-screen heropattern-graphpaper-zinc-900"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        />

        
        <div className='absolute top-0 w-full h-full'>
          <div className='flex flex-col gap-y-12 items-center justify-center content-center self-center p-16 h-full'>
            
            <div className='flex flex-row gap-x-2 p-2 pr-4 rounded-full bg-zinc-800/50 items-center border-solid border-[1px] border-zinc-500'>
              <div className='relative h-8 w-8'>
                <Image 
                  src="/images/portrait.jpg" 
                  className='rounded-full' 
                  layout="fill"
                  objectFit="cover"
                  alt="Picture of website's creator, Stefanus Ndaru" 
                />
              </div>
              <div className='flex flex-row gap-x-2 text-zinc-300'>
                <p className='font-bold'>Hello, I&apos;m Ndaru!</p>
                <p>Welcome to my site.</p>
              </div>
            </div>

            <div className='flex flex-col items-center gap-y-2 text-center'>
              <h3>Unfortunately, my personal website is still</h3>
              <h1 className='text-5xl font-bold'>Currently Under Development</h1>
              <HorizontalLine />
            </div>

            
            <div className='flex flex-col gap-y-8'>
              <h3 className='text-center'>In the meantime, you can check my social accounts below</h3>
              <div className='flex flex-col gap-y-8'>

                <SocialCard 
                  hrefLink='mailto: stefanus.ndaru.w@gmail.com' 
                  type='Email' 
                  logoURL='/svg/email.svg' 
                  details='stefanus.ndaru.w@gmail.com' 
                />
                <SocialCard 
                  hrefLink='https://www.linkedin.com/in/stefanusndaruw/' 
                  type='LinkedIn' 
                  logoURL='/svg/linkedin.svg' 
                  details='Stefanus Ndaru Wedhatama' 
                />
                <SocialCard 
                  hrefLink='https://www.threads.net/@st.ndar' 
                  type='Threads' 
                  logoURL='/svg/threads.svg' 
                  details='st.ndar' 
                />
                <SocialCard 
                  hrefLink='https://www.instagram.com/st.ndar/' 
                  type='Instagram' 
                  logoURL='/svg/instagram.svg' 
                  details='st.ndar' 
                />

              </div>
            </div>
          </div>
        </div>

      </div>

    </main>
  )
}
