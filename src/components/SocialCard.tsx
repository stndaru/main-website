import React from "react"
import Image from 'next/image'
import rightArrow from "../../public/svg/arrow-right.svg";

export interface SocialCardProps {
    hrefLink: string
    type: string
    logoURL: string
    details: string
}

export const SocialCard: React.FC<SocialCardProps> = ({ hrefLink, type, logoURL, details}) => (
    <a href={hrefLink} className='transition ease-in-out flex flex-col gap-y-2 bg-zinc-800/50 hover:bg-zinc-800 p-4 rounded-lg border-none border-2 border-zinc-500 hover:border-solid'>
        <div className='flex flex-row gap-x-2 items-center justify-between'>
        <div className='flex flex-row gap-x-2 items-center'>
            <div className='relative h-8 w-8'>
            <Image 
                src={logoURL} 
                className='rounded-full' 
                layout="fill"
                objectFit="cover"
                alt="Picture of website's creator, Stefanus Ndaru" 
            />
            </div>
            <h3 className='font-bold'>{type}</h3>
        </div>
        <div className='relative h-6 w-6'>
            <Image 
            src={rightArrow}
            className='rounded-full' 
            layout="fill"
            objectFit="cover"
            alt="Picture of website's creator, Stefanus Ndaru" 
            />
        </div>
        </div>
        <p className="text-zinc-400">{details}</p>
    </a>
)