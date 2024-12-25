'use client'

import Header from "../components/Header"
import Footer from "../components/Footer"
import OneMovie from "../components/OneMovie"
import Image from "next/image"
import { FadeIn } from "../components/FadeIn"

const Contact = () => {
    return (
        <div>
            <Header />
            <h2 className="mt-2 md:mt-3 xl:mt-4 text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:mb-1 xl:mb-2 text-red-400 font-bold">About Me</h2>
            <section className={`
    grid grid-cols-12 gap-4 sm:px-4 sm:py-4 lg:py-8 xl:py-12 2xl:py-16
    `}>
      <div className={`
        bg-red-100 flex flex-col items-center justify-center text-center
        text-xs col-span-12 col-start-1
        py-2 rounded-sm
        sm:col-start-2 sm:col-span-5 sm:w-full sm:py-2
        md:text-sm md:rounded-md md:py-4
        lg:py-6 lg:text-base lg:rounded-lg
        xl:text-lg xl:rounded-xl
        2xl:text-xl 2xl:rounded-2xl
      `}>
        <FadeIn>
        <p>こんにちは！<br/>都内で動画編集をしているケントと申します！！</p>
                    <br/>
                    <p>お酒とアニソンとボーカロイドが大好きな30歳です！</p>
                    <br/>
                    <p>Vtuber、ストリーマー、プロゲーマーの方々の<br></br>ゲーム実況や配信を日夜楽しんでいます！</p>
                    <br/>
                    <p>APEXやストリートファイター６等のゲームが好きで<br/>さらに生放送も大好きなので</p>
                    <p>ライブ配信をもっと盛り上げたい！という人の<br/>お手伝いをするためにこのサービスを作りました！</p>
                    <br/>
                    <p>あなたが人気配信者になる一歩目の<br/>手助けができることにわくわくしています！</p>
                    <br/>
                    <p><strong>ともにこの配信者大戦国時代を勝ち抜きましょう！</strong></p>
        </FadeIn>
      </div>
      <div className="order-first sm:order-last flex col-start-4 col-span-7 sm:col-span-5 justify-center items-center md:p-2 lg:p-4 xl:p-6 2xl:p-8"><Image src="/ME.png" width={755} height={658} /></div>
    </section>
            <Footer />
        </div>
    )
}

export default Contact