"use client"

import React from "react"
import { education } from "@/Data"
import { Quicksand, Rubik } from "next/font/google"
import CardEdycation from "./card"
const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });
export default function Education() {



    return (
        <div className=" px-2 md:px-12 flex h-full w-full flex-col py-8 space-y-8 bg-celeste-dark">
            <div className="flex flex-col  px-4 bg-celeste-dark justify-start">
                <h1 className={`${rubik.className} text-celeste-background text-3xl `}id="educacion">Education</h1>
            </div>
            <div className="flex flex-col space-y-12">
                {education.map(({ institution, image, description, web}) => {

                    return (
                        <div>
                            <CardEdycation institution={institution} web={web} description={description} image={image} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}