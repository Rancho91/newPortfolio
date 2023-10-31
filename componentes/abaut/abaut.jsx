import React from "react"
import { abaut, tecnologies } from "../../Data"
import { abautE } from '../../DataENG'
import { Quicksand, Rubik } from "next/font/google" 

const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });

export default function About() {
    return (
        <div className={`flex p-1 flex-col space-y-8 md:w-[75%] border-celeste-background items-center border-2 justify-center content-center rounded-xl`}>
            <h1 className={`${rubik.className} text-lg md:text-3xl text-celeste-background`} id="abaut">Full Stack Web Developer</h1>
            <div className={`flex flex-col  justify-center items-center space-x-4 md:flex-row`}>
                <div className={`w-32 md:w-[30%]  rounded-full`} >
                    <img
                        src="https://res.cloudinary.com/dxatwbzff/image/upload/v1683541346/Captura_de_pantalla_2023-05-08_072143_zyvftu.png"
                        className="rounded-full"
                        alt="profile photo"

                    />
                </div>
                <div className={`md:w-[60%]`}>
                    <p className={`${inter.className} text-sm md:text-lg text-celeste-background`}>
                        {abautE}
                    </p>
                </div>

            </div>
            <div className="px-2 flex flex-row flex-wrap justify-center md:justify-between w-full space-x-4">
                {tecnologies.map((t) => {
                    return (
                        <div className="py-3 ">
                            <img src={t.image} alt="" className=" h-5 md:h-8" />
                        </div>
                    )
                })}
            </div>

        </div>)
}
