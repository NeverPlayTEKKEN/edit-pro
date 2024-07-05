'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMovie from "../components/OneMovie";

const Service = () => {
    return (
        <div>
            <Header />
            <OneMovie
                image_src = '/bg2.png'
                tittle = "松のプラン"
                description = {[<div class="flex justify-center">１７文字で改行されるので注意が必要</div>, <div class="flex justify-center"></div>]}
            />
            <OneMovie
                image_src = '/bg2.png'
                tittle = "竹のプラン"
                description = {[<div class="flex justify-center">１７文字で改行されるので注意が必要</div>, <div class="flex justify-center"></div>]}
            />
            <OneMovie
                image_src = '/bg2.png'
                tittle = "梅のプラン"
                description = {[<div class="flex justify-center">１７文字で改行されるので注意が必要</div>, <div class="flex justify-center"></div>]}
            />
            <Footer />
        </div>
    )
}

export default Service;