'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";

const Work = () => {
    return (
        <div>
            <Header />
            <div class="grid grid-cols-4">
                <div class="grid-items m-2"></div>
                <div class="grid-items m-2"></div>
                <div class="grid-items m-2"></div>
                <div class="grid-items m-2"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Work;