'use client'

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="relative grid grid-cols-4 md:grid-cols-12 h-screen">
        <div class="relative col-span-8 md:order-last h-fill flex items-center justify-center">
          <Image src="/background.png" fill style={ {objectFit:'contain'}}/>
          <div class="absolute bg-black w-1/2 h-1/2 text-red-500">sample movie</div>
        </div>
        <div class="col-span-4 m-2 p-5 h-fill flex justify-center items-center">
          <div>
            <p class="m-5 xl:m-10 text-5xl xl:text-7xl border-b-4">This is Sample</p>
            <div class="m-5 xl:m-10 xl:text-xl">
              <p>これは説明です。</p>
              <p>大体こんな感じで説明を挿入します。</p>
              <p>三行くらいがちょうどいいかな</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rotate-3 bg-gray-100 mt-5">
        <div class="-rotate-3 grid grid-cols-12">
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
          <div class="bg-pink-100 m-2"></div>
        </div>
      </div>  
    </div>
  )
}

export default Home;