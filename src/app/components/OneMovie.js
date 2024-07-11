'use client'
import Image from "next/image";
import { FadeIn } from "./FadeIn";

const OneMovie = (props) => {
    return (
        
        <div class="md:grid md:grid-cols-12 mb-8">
            
            <div class="relative md:col-span-8 md:mt-1 md:order-last">
                <FadeIn>
                    <Image src={props.image_src} width={1920} height={1080} objectFit="contain"/>
                </FadeIn>
            </div>
            
            <div class="md:flex md:flex-col md:justify-center md:col-span-4">
                <FadeIn>
                <div class="mt-1 md:m-5 flex md:flex-col justify-center items-center text-xl md:text-3xl xl:text-5xl">{props.tittle}</div>
                <div class="mx-2 flex justify-center items-center text-sm xl:text-xl">
                    <div>{props.description}</div>
                </div>
                </FadeIn>
            </div>
        </div>
        
    )
}

export default OneMovie;