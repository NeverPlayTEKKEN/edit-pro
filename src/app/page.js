'use client'

import Header from "./components/Header";
import OneMovie from "./components/OneMovie";
import PlanBox from "./components/PlanBox";
import Footer from "./components/Footer";
import { FadeIn, FedIn } from './components/FadeIn'
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <OneMovie
          image_src = '/bg2.webp'
          tittle = {[<div class="md:pl-4">ちょっとだけ、</div>, <div>おもしろい</div>, <div>あなたに</div>]}
          description = {[<div class="flex justify-center">いつもおもしろくはいられないから</div>, <div class="flex justify-center">あなたが輝いた瞬間を切り抜きます</div>]}
        />
        <FadeIn>
        <div class="text-center md:text-base xl:text-xl bg-gray-200 text-sm py-4 mb-8 px-8 xl:py-12 xl:px-12">
          <div class="bg-white p-2 xl:p-8" >
          <p>配信をつけたらたくさんの視聴者で溢れ<br />
          コメントが読み切れない…</p>
          <br/>
          <p>そんな未来を一緒に掴みましょう！</p>

          <p>人気の配信者の<strong>“ほぼ全て”</strong>にあって<br />
          貴方に無いもの…</p>
          <br/>
          <p>それは<strong class="bg-yellow-300">「切り抜き動画」</strong>です。</p>
          <br/>
          <p>ClipRiZeは切り抜き動画の制作を<br/>代行するサービスです。</p>
        </div>
        </div>
        </FadeIn>
        <FadeIn>

          <div class="mx-2 md:mt-16 md:ml-6 flex justify-start items-center">
            <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
            <div class="text-md md:text-2xl xl:text-4xl">Plan</div>
          </div>
      
          <div class="md:mx-4 relative text-center">
            <Image src="/plan.PNG" width={1920} height={1080} objectFit="contain" />
          </div>

          <div class="mx-4 mt-2 mb-8 md:mb-16 flex justify-center text-sm md:text-base xl:text-xl  border-b-4 border-gray-100 md:border-none">
            <div>
              <div class="w-fit">・３つのプランからお選びいただけます。</div>
              <div class="w-fit">・記載のプラン以外も相談可能。</div>
              <div class="w-fit md:border-b-4 border-gray-100">・お客様の満足のため全力疾走します！</div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>

          <div class="text-center bg-gray-200 text-sm  md:text-base xl:text-xl py-4 mb-8 px-8 xl:py-12 xl:px-12">
          <div class="bg-white p-2 xl:p-8" >
  <p class="text-slate-600">人が来ない…コメントが１…</p>
  <p class="text-slate-600">誰かに見つけてほしい…</p>
  <br/>
  <p>YouTubeショートやTikTokは</p>
  <p>再生数が上がりやすいので</p>
  <p><strong class="bg-yellow-300">魅力が必ず伝わります！</strong></p>
  <br/>
  <p>あなたが人気配信者になる</p>
  <p>お手伝いをさせてください！</p>
</div>
</div>
          
        </FadeIn>
        <Footer />
      </div>
    </div>
  )
}

export default Home;