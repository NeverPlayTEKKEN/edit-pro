'use client'

import { FadeIn } from "./FadeIn"
import Image from "next/image"
import confetti from 'canvas-confetti'
import { useEffect, useState } from "react"

const HeroImage = () => {

    const first_tittle_style = `
      m-2 h-fit w-fit rounded-sm px-2 py-1 shadow-lg bg-amber-200 font-bold
      sm:col-start-1 sm:col-span-9 sm:text-xl
      md:col-start-2 md:text-2xl
      lg:text-3xl
      xl:m-4 xl:px-3 xl:py-3 xl:text-4xl
      2xl:text-5xl
    `
    const second_tittle_style = `
      m-2 h-fit w-fit rounded-sm px-2 py-1 shadow-lg bg-amber-200 font-bold
      text-2xl
      sm:col-start-2 sm:col-span-9 sm:text-4xl
      md:col-start-3 md:text-5xl
      lg:text-6xl
      xl:m-4 xl:px-5 xl:py-3 xl:col-start-3 xl:text-7xl
      2xl:text-8xl
      
    `
    const third_tittle_style = `
      m-2 h-fit w-fit rounded-sm px-2 py-1 shadow-lg bg-amber-200 font-bold
      sm:col-start-5 sm:col-span-9 sm:text-xl
      md:col-start-6 md:text-2xl
      lg:text-3xl
      xl:m-4 xl:px-3 xl:py-3 xl:text-4xl
      2xl:text-5xl 2xl:col-start-6
    `


  
    return (
      <>
      <section className={`
          mx-4 relative
          sm:grid sm:grid-cols-12 sm:gap-4
        `}>
          <div className="col-start-2 col-end-12 col-span-10 flex justify-center md:px-6 lg:px-8 xl:px-10">
            <Image src='/bg3.png' height={810} width={1491} />
          </div>
  
          <div className={`
            absolute w-full top-1/2 transform -translate-y-1/2
            sm:ml-0 sm:grid sm:grid-cols-12 sm:gap-4`
          }>
            
            <div className={first_tittle_style}><FadeIn><p>ちょっとだけ</p></FadeIn></div>
            <div className={second_tittle_style}><FadeIn><p>おもしろい</p></FadeIn></div>
            <div className={third_tittle_style}><FadeIn><p>あなたに！</p></FadeIn></div>
            
          </div>
        </section>
        <FadeIn>
        <p className={`
          text-center mt-2 lg:mt-4 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
        `}>
          いつもおもしろくはいられないから<br/>あなたが輝いた瞬間を切り抜きます
        </p>
        </FadeIn>
      </>
    )
  }

  export default HeroImage