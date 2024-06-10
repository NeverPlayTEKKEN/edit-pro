'use client'

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="relative grid grid-cols-4 md:grid-cols-12 mt-5">
        <div class="relative col-span-6 m-4 h-fill flex items-center justify-center">
          <Image src="/background.png" width={900} height={636} objectFit="contain"/>
          <div class="absolute bg-black">movie</div>
        </div>
        <div class="col-span-6 md:order-first m-2 p-5 h-fill flex justify-center items-center">
          <div>
            <p class="text-5xl m-5">This is Sample</p>
            <div class="m-5">
              <p>これは説明です。</p>
              <p>大体こんな感じで説明を挿入します。</p>
              <p>三行くらいがちょうどいいかな</p>
            </div>
          </div>
        </div>
      </div>
      <div class="rotate-3 bg-gray-100 mt-5">
        <div class="-rotate-3 grid grid-cols-4 md:grid-cols-12">helloaaaaaaaaaaaa</div>
      </div>
    </div>
  )
}

export default Home;