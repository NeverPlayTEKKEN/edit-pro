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
          description = {[<div class="flex justify-center">一瞬のきらめきも世界に届けます</div>, <div class="flex justify-center"></div>]}
        />
        <FadeIn>
          <div class="mx-2 md:mt-16 md:ml-6 flex justify-start items-center">
            <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
            <div class="text-md md:text-2xl xl:text-4xl">Plan</div>
          </div>
      
          <div class="grid grid-cols-3 md:mx-4">
            <PlanBox description="梅のプランです"/>
            <PlanBox description="竹のプランです"/>
            <PlanBox description="松のプランです"/>
          </div>

          <div class="mx-2 mt-2 mb-8 md:mb-16 flex justify-center text-sm md:text-base xl:text-xl">
            <div>
              <div class="w-fit">・３つのプランからお選びいただけます。</div>
              <div class="w-fit">・記載のプラン以外も相談可能。</div>
              <div class="w-fit">・お客様の満足のため全力疾走します！</div>
            </div>
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