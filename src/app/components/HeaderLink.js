'use client'

const HeaderLink = (props) => {

    return (
        <div class="mx-1 md:w-[110px] md:h-full cursor-pointer">
            <button
                onClick={props.onClick}
                class="w-full h-full hover:text-white rounded-sm md:rounded-md bg-gray-100 md:bg-white hover:bg-gray-700 p-1"
            >
                <div class="text-sm md:text-lg">{props.text}</div>
            </button>
        </div>
    )
}

export default HeaderLink;