'use client'

const HeaderLink = (props) => {

    return (
        <div class="mx-1 xl:m-6 hover:text-orange-500">
            <button
                onClick={props.onClick}
                class="w-full text-xs hover:underline rounded-sm bg-gray-100 p-1"
            >
                {props.text}
            </button>
        </div>
    )
}

export default HeaderLink;