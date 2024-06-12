'use client'

import Header from "./components/Header";
import OneMovie from "./components/OneMovie";
import PlanBox from "./components/PlanBox";
import Footer from "./components/Footer";
import { FadeIn, FedIn } from './components/FadeIn'

const Home = () => {
  return (
    <div>
      <Header />
      <div class="flex-grow" />
      <OneMovie
        image_src = '/background.png'
        tittle = "その瞬間を逃しません"
        description = {[<div class="flex justify-center">配信者人生で最高の瞬間はいつですか？</div>, <div class="flex justify-center"></div>]}
      />
      <FadeIn>
      <div class="mx-2 md:mt-16 flex justify-start items-center">
        <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
        <div class="text-xl md:text-2xl xl:text-4xl">Plan</div>
      </div>
      
      <div class="grid grid-cols-3 mb-16">
        <PlanBox description="梅のプランです"/>
        <PlanBox description="竹のプランです"/>
        <PlanBox description="松のプランです"/>
      </div>
      </FadeIn>
      <OneMovie
        image_src = '/background.png'
        tittle="二枚目の画像です"
        description="説明します"
      />
      <Footer />
    </div>
  )
}

export default Home;