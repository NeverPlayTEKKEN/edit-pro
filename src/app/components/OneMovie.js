'use client'
import Image from "next/image";

const OneMovie = (props) => {
    return (
        <div class="mb-4 md:flex">
            <div class="h-64 md:h-96 md:w-full mt-1 relative md:order-last">
                <Image src={props.image_src} fill />
            </div>
            <div class="md:flex md:flex-col md:justify-center md:w-full">
                <div class="flex">
                    <div class="aspect-square"></div>
                    <div class="w-full mt-1 md:m-4 flex justify-center items-center text-xl md:text-5xl">{props.tittle}</div>
                    <div class="aspect-square md:hidden"></div>
                </div>
                <div class="rounded-md mx-2 flex justify-center items-center text-sm md:text-xl">
                    <div>{props.description}</div>
                </div>
            </div>
        </div>
    )
}

export default OneMovie;