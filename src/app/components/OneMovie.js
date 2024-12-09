'use client'
import Image from "next/image";
import { FadeIn } from "./FadeIn";

const OneMovie = (props) => {
    return (
        
        <div class="md:grid md:grid-cols-12 mb-8">
            
            <div class="relative md:col-span-8 md:mt-1 md:order-last">
                <Image src={props.image_src} width={1920} height={1080} objectFit="contain"/>
            </div>
            
            <div class="md:flex md:flex-col md:justify-center md:col-span-4">
                <FadeIn>
                <div class="mt-1 md:m-5 flex md:flex-col justify-center items-center font-bold md:font-normal text-md md:text-3xl xl:text-5xl">{props.tittle}</div>
                <div class="mx-2 flex justify-center items-center text-sm xl:text-xl">
                    <div class="xl:border-b-4 md:border-gray-100">{props.description}</div>
                </div>
                </FadeIn>
            </div>
        </div>
        
    )
}

export default OneMovie;