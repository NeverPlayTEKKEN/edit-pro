'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import { YouTubeEmbed } from "@next/third-parties/google";

const Work = () => {
    return (
        <div>
            <Header />
            <div class="m-2 md:text-xl">これまでに作成した動画です。</div>
            <div class="md:grid md:grid-cols-4 md:gap-1">
                <div class="mb-6">
                    <YouTubeEmbed videoid="95FCtaFu67o"/>
                    【鉄拳8】日本トップレベルの吉光対決がヤバすぎる
                </div>
                <div class="mb-6">
                    <YouTubeEmbed videoid="oL8UVpvSVck"/>
                    【対談】ストⅥ中堅プロゲーマーが人生かけすぎてて重かった【格ゲーコラボ】
                </div>
                <div class="mb-6">
                    <YouTubeEmbed videoid="uRBmrmF6zA0"/>
                    【喧嘩】今回のDJ社長と銀太の件で今までのレペゼンの裏側を暴露してしまうチバニャン
                </div>
                <div class="mb-6">
                    <YouTubeEmbed videoid="5KobGtroZmE"/>
                    【ふぉい謝罪】ハイパーゲーム大会中にコレだけはするなとプロゲーマに釘刺されるも●●の許可が出されるふぉい 【関優太 ふぉい切り抜き RAMU おにや まさのり】
                </div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Work;