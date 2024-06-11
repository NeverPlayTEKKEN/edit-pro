'use client'

import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <div class="h-64 mt-2 relative">
        <Image src='/background.png' fill />
      </div>
      <div class="flex">
        <div class="aspect-square border h-12"></div>
        <div class="border w-full flex justify-center items-center text-2xl">This is Sample</div>
        <div class="aspect-square h-12"></div>
      </div>
      <div class="m-2 h-16 rounded-md bg-gray-200 flex items-center text-xs">
        <div>
          <p>ここにサービスの説明を記入します。</p>
          <p>大体3行くらいを想定しています。</p>
          <p>どんなことを書くかはまた考えます。</p>
        </div>
      </div>
    </div>
  )
}

export default Home;