'use client'

import Header from "../components/Header"
import Footer from "../components/Footer"
import OneMovie from "../components/OneMovie"

const Contact = () => {
    return (
        <div>
            <Header />
            <OneMovie
                image_src = '/me.webp'
                tittle = "私はこんな人"
                description = {[<div class="flex justify-center">１７文字で改行されるので注意が必要</div>, <div class="flex justify-center"></div>]}
            />
            <Footer />
        </div>
    )
}

export default Contact