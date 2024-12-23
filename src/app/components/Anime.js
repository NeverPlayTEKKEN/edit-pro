'use client'

import { useState } from "react"
import { useEffect } from "react"

const Anime = () => {

    const [style, setStyle] = useState("absolute top-0 left-0 h-[1500px] w-full bg-black z-50 transition-opacity")

    
    useEffect(() => {
        setStyle("absolute top-0 left-0 h-[1500px] w-full bg-black z-50 duration-1000 opacity-0 transition-opacity")
        setTimeout(()=> {
            setStyle("hidden")
        }, 800)
    },[])

    return (
        <div className={style}></div>
    )
}

export default Anime