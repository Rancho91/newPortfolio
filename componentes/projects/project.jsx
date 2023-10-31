"use client"

import React from "react"
import { proyect } from "@/Data"
import { Quicksand, Rubik } from "next/font/google"
import CardProyect from "./card"
const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });
export default function Projects() {



    return (
        <div className=" px-4 md:px-12 flex h-full flex-col py-8 space-y-8 bg-celeste-light" id="proyectos">
            <div className="flex flex-col  px-4 bg-celeste-light">
                <h1 className={`${rubik.className} text-celeste-background text-3xl `} id="proyectos">Proyectos</h1>
            </div>
            <div className="flex flex-col space-y-4">
                {proyect.map(({ name, image, description, tecnologies, web }) => {

                    return (
                        <CardProyect name={name} image={image} description={description} tecnologies={tecnologies} web={web} />
                    )
                })}
            </div>
        </div>
    )
}