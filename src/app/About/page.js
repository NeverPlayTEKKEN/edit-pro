'use client'

import Header from "../components/Header"
import Footer from "../components/Footer"
import OneMovie from "../components/OneMovie"

const Contact = () => {
    return (
        <div>
            <Header />
            <OneMovie
                image_src = '/ME.png'
                description = {[<div class="flex justify-center">
                    <div class="text-center mt-2 md:mt-0"><p>こんにちは！<br/>都内で動画編集をしているケントと申します！！</p>
                    <br/>
                    <p>お酒とアニソンとボーカロイドが大好きな30歳です！</p>
                    <br/>
  <p>Vtuber、ストリーマー、プロゲーマーの方々の<br></br>ゲーム実況や配信を日夜楽しんでいます！</p>
  <br/>
  <p>APEXやストリートファイター６等のゲームが好きで
    <br/>さらに生放送も大好きなので</p>
  <p>ライブ配信をもっと盛り上げたい！という人の<br/>お手伝いをするためにこのサービスを作りました！</p>
  <br/>
  <p>あなたが人気配信者になる一歩目の<br/>手助けができることに
  わくわくしています！</p>
  <br/>
  <p><strong>ともにこの配信者大戦国時代を勝ち抜きましょう！</strong></p></div>
                </div>, <div class="flex justify-center"></div>]}
            />
            <Footer />
        </div>
    )
}

export default Contact