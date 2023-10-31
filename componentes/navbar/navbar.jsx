'use client'
import { useState } from "react"
import React from "react"
import { Quicksand, Rubik } from "next/font/google" 
import styles from "./styles.module.css"
const inter = Quicksand({ subsets: ['latin'], weight: ['500'] });
const rubik = Rubik({ subsets: ['latin'], weight: ['500'] });


export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handlerHidden = () => {
        setNav(!nav)
    }
    return (
        <nav className={`${styles.nav}`}>
            <div className=" text-center fixed top-0 left-0">
                <button onClick={handlerHidden} className={`${rubik.className} text-celeste-background focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2   " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation`}>
                    Menu
                </button>
            </div>

            <div className={` fixed bg-celeste-background  h-full ${nav ? "translate-x-0" : "-translate-x-full"} top-0  left-0  h-screen p-4  transition-transform w-44 " tabindex="-1" aria-labelledby="drawer-navigation-label`}>
                <div className="h-full flex flex-col justify-between">
                    <div >

                        <h5 id="drawer-navigation-label" className={`${inter.className} text-base text-gray-100 font-semibold  uppercase dark:text-gray-400`}>Menu</h5>
                        <button onClick={handlerHidden} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-100 bg-transparent hover:bg-celeste-hover  rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center " >
                            <svg className="w-3 h-3 text-gray-100 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only text-gray-100 ">Close menu</span>
                        </button>
                        <div className="py-4 overflow-y-auto">
                            <ul className="space-y-2 font-medium">
                                <li>

                                        <span className={` ${inter.className} text-gray-100  opacity-100  ml-3 text-xl`}>Portfolio</span>
                                  
                                </li>
                                <li>
                                    <a href="#abaut" className="flex items-center p-2 text-gray-100 hover:bg-celeste-hover rounded-lg d group">

                                        <span className={` ${inter.className} text-gray-100  ml-3 text-xl`}>About</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#educacion" className="flex items-center p-2 text-gray-100 hover:bg-celeste-hover rounded-lg  group">

                                        <span className={` ${inter.className} text-gray-100  ml-3 text-xl`}>Educacion</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#proyectos" className="flex items-center p-2 text-gray-100 hover:bg-celeste-hover rounded-lg group">
                                        <span className={` ${inter.className} text-gray-100  ml-3 text-xl`}>Proyectos</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#contacto" className={`${styles.nav} flex items-center p-2 text-gray-100 hover:bg-celeste-hover rounded-lg` }>

                                        <span className={` ${inter.className} text-gray-100  ml-3 text-xl`}>Contacto</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row space-x-2 justify-center items-end pb-8 md:pb-0">
                        <div className="">
                            <a
                                href="https://www.linkedin.com/in/ramiro-sanchez-solano/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={`h-4`}
                                    src={
                                        "https://res.cloudinary.com/dnkaxvkr9/image/upload/v1688648242/b0mnhfatyhz3ckvgcsfg.png"
                                    }
                                    alt="LinkedIn"
                                    title="LinkedIn"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="https://github.com/Rancho91"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={`h-4`}
                                    src={
                                        "https://res.cloudinary.com/dxatwbzff/image/upload/v1684165478/github_logo_icon_147285_zgpagr.png"
                                    }
                                    alt="GitHub"
                                    title="GitHub"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                        <div className="">
                            <a
                                href="https://wa.me/543548504261"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    className={`h-4`}
                                    src={
                                        "https://res.cloudinary.com/dxatwbzff/image/upload/v1696872265/ts6ttsywo1hyac76966c.png"
                                    }
                                    alt="LinkedIn"
                                    title="LinkedIn"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className="">
                        <div className="">
                            <button
                                className={``}
                                name="ENG"

                            >
                                ENG
                            </button>
                        </div>
                        <div className="col-5 ">
                            <button
                                className={``}
                                name="ESP"
                            >
                                ESP{" "}
                            </button>
                        </div>
                    </div> */}
            </div>
        </nav>


    )
}

