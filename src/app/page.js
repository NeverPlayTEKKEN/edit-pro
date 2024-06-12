'use client'

import Header from "./components/Header";
import OneMovie from "./components/OneMovie";
import PlanBox from "./components/PlanBox";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="flex-grow" />
      <OneMovie
        image_src = '/background.png'
        tittle = "This is Sample"
        description = {[<div class="flex justify-center">これはサンプルです</div>, <div class="flex justify-center">これはサンプルですテスト</div>]}
      />
      <div class="mx-2 flex justify-start items-center">
        <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
        <div class="text-xl md:text-2xl">Plan</div>
      </div>
      <div class="grid grid-cols-3 mb-12">
        <PlanBox description="梅のプランです"/>
        <PlanBox description="竹のプランです"/>
        <PlanBox description="松のプランです"/>
      </div>
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