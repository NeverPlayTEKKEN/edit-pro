'use client'
import Image from "next/image";

const OneMovie = (props) => {
    return (
        <div class="mb-8">
            <div class="h-56 mt-1 relative">
                <Image src={props.image_src} fill />
            </div>
            <div class="flex">
                <div class="aspect-square"></div>
                <div class="w-full mt-1 flex justify-center items-center text-xl">{props.tittle}</div>
                <div class="aspect-square"></div>
            </div>
            <div class="rounded-md mx-2 flex justify-center items-center text-xs">
                <div>{props.description}</div>
            </div>
        </div>
    )
}

export default OneMovie;