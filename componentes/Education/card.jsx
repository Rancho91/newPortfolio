"use client"

import { Quicksand, Rubik } from "next/font/google"

const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });

export default function CardEducation({ institution, image, description, web }) {

    return (
        <div className="flex p-4 rounded-3xl space-y-2 justify-center w-full h-18  flex-col px-8 hover:bg-celeste-backLight text-gray-100 hover:text-celeste-back " >
            <a href={web} target="_blank" className="space-y-4" rel="noopener noreferrer">
                <div className="flex justify-center w-full">
                    <h1 className={`${rubik.className}  text-lg`}>{institution} </h1>
                </div>
                <div className="flex flex-col space-y-4 md:flex-row items-center  content-center w-full space-x-4">
                    <div 
                        className="h-32 w-full  md:w-[30%] "
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'

                        }}
                    ></div>
                    <div className="flex flex-col md:w-[70%] w-full text-sm md:tex:-lg">
                        <div>
                            <p className={`${inter.className} `}> {description}</p>

                        </div>
                        
                    </div>

                </div>
            </a>

        </div>

    )
}