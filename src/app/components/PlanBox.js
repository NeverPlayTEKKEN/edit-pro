'use client'

import Image from 'next/image'

const PlanBox = (props) => {
    return (
        <div class="h-44 md:h-64 mx-2 rounded-md bg-gray-200">
            <div class="relative h-full w-full flex items-end">
                {/*<Image src="/background.png" fill/>*/}
                <div class="absolute buttom-0 left-0 right-0 text-sm flex justify-center">{props.description}</div>
            </div>
            
        </div>
    )
}

export default PlanBox;