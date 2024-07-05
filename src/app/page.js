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
      <div>
        <OneMovie
          image_src = '/bg2.png'
          tittle = {[<div>ちょっと</div>, <div>おもしろい</div>, <div>あなたに</div>]}
          description = {[<div class="flex justify-center">その一瞬をみんなに届けよう</div>, <div class="flex justify-center"></div>]}
        />
        <FadeIn>
          <div class="mx-2 mt-4 md:mt-16 flex justify-start items-center">
            <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
            <div class="text-md md:text-2xl xl:text-4xl">Plan</div>
          </div>
      
          <div class="grid grid-cols-3 mb-16">
            <PlanBox description="梅のプランです"/>
            <PlanBox description="竹のプランです"/>
            <PlanBox description="松のプランです"/>
          </div>
          
        </FadeIn>
        <OneMovie
          image_src = '/bg2.png'
          tittle="二枚目の画像です"
          description="説明します"
        />
        <Footer />
      </div>
    </div>
  )
}

export default Home;