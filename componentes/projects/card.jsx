"use client"
import { Quicksand, Rubik } from "next/font/google"

const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });

export default function CardProyect({ name, image, description, tecnologies, web }) {

    return (
        <div className="flex p-1 md:p-4   justify-center w-full h-18  text-black flex-col px-8 hover:bg-celeste-backLight hover:text-celeste-back " >
            <a href={web} className="space-y-6" target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center">
                    <h1 className={`${rubik.className}  text-xl`}>{name} </h1>
                </div>
                <div className="flex flex-col space-y- md:flex-row items-center content-center w-full space-x-4">
                    <div
                        className=" h-20 w-20 md:h-32 md:w-32 md:w-[30%]"
                        style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'

                        }}
                    ></div>
                    <div className="flex flex-col space-y-4 md:w-[70%]">
                        <div>
                            <p className={inter.className}> {description}</p>

                        </div>
                        <div className="flex flex-row space-x-2 flex-wrap justify-center md:justify-between">
                            {tecnologies.map((t) => {
                                return (
                                    <div className="justify-center items.center">
                                        <img src={t.image} alt="" className=" h-5 md:h-8" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </a>

        </div>

    )
}