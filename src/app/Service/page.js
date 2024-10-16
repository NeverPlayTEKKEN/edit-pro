'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMovie from "../components/OneMovie";

const Service = () => {
    return (
        <div>
            <Header />
            <OneMovie
                image_src = '/light.PNG'
                tittle = "ライトプラン"
                description = {[<div class="flex justify-center">お試しでご依頼いただく方におすすめ</div>, <div class="flex justify-center">再生数が伸びやすいショート動画を</div>,<div class="flex justify-center">ピンポイントで体験いただけます。</div>]}
            />
            <OneMovie
                image_src = '/standerd.PNG'
                tittle = "スタンダードプラン"
                description = {[<div class="flex justify-center">全部入った基本のプラン</div>, <div class="flex justify-center">はじめての方から継続の方まで</div>,<div class="flex justify-center">自信をもっておすすめできます。</div>]}
            />
            <OneMovie
                image_src = '/pro.PNG'
                tittle = "プロプラン"
                description = {[<div class="flex justify-center">本気で売れたい方におすすめ</div>, <div class="flex justify-center">最高のクオリティの動画を</div>, <div class="flex justify-center">最強の熱量で納品します！</div>]}
            />
            <OneMovie
                image_src = '/test.PNG'
                tittle = "おためしプラン"
                description = {[<div class="flex justify-center">はじめてご依頼の方限定</div>, <div class="flex justify-center">自信があるから提供できる低価格で</div>, <div class="flex justify-center">全力対応いたします。</div>]}
            />
            <div class="text-sm text-center font-bold mb-6">
                <p>各種プランは1,000~5,000円にてお急ぎ対応できます。</p>
                <p>下記メールアドレスまでお気軽にご相談ください！</p>
            </div>
            <Footer />
        </div>
    )
}

export default Service;