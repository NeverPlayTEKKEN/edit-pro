'use client'
import Image from "next/image";

const OneMovie = (props) => {
    return (
        <div class="mb-4 md:flex">
            <div class="relative md:w-full mt-1 md:order-last">
                <Image src={props.image_src} width={960} height={636} objectFit="contain"/>
            </div>
            <div class="md:flex md:flex-col md:justify-center md:w-full">
                <div class="mt-1 md:m-4 flex justify-center items-center text-xl md:text-4xl xl:text-5xl">{props.tittle}</div>
                <div class="rounded-md mx-2 flex justify-center items-center text-sm md:text-base xl:text-xl">
                    <div>{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default OneMovie;