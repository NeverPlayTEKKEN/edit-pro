'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMovie from "../components/OneMovie";

const Service = () => {
    return (
        <div>
            <Header />
            <OneMovie
                image_src = '/light.png'
                tittle = "ライトプラン"
                description = {[<div class="flex justify-center">お試しでご依頼いただく方におすすめ</div>, <div class="flex justify-center">再生数が伸びやすいショート動画を</div>,<div class="flex justify-center">ピンポイントで体験いただけます。</div>]}
            />
            <OneMovie
                image_src = '/standerd.png'
                tittle = "スタンダードプラン"
                description = {[<div class="flex justify-center">全部入った基本のプラン</div>, <div class="flex justify-center">はじめての方から継続の方まで</div>,<div class="flex justify-center">自信をもっておすすめできます。</div>]}
            />
            <OneMovie
                image_src = '/pro.png'
                tittle = "プロプラン"
                description = {[<div class="flex justify-center">本気で売れたい方におすすめ</div>, <div class="flex justify-center">最高のクオリティの動画を</div>, <div class="flex justify-center">最強の熱量で納品します！</div>]}
            />
            <Footer />
        </div>
    )
}

export default Service;