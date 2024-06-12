'use client'

const HeaderLink = (props) => {

    return (
        <div class="mx-1 md:mx-0 md:w-[200px] md:h-full md:border-x-2 md:border-white">
            <button
                onClick={props.onClick}
                class="w-full h-full hover:text-white rounded-sm bg-gray-100 hover:bg-black p-1"
            >
                <div class="text-sm md:text-base">{props.text}</div>
            </button>
        </div>
    )
}

export default HeaderLink;