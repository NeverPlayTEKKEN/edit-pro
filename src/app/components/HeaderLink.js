'use client'

const HeaderLink = (props) => {

    return (
        <div class="mx-1 xl:m-6">
            <button
                onClick={props.onClick}
                class="w-full text-sm hover:text-white rounded-sm bg-gray-100 hover:bg-black p-1"
            >
                {props.text}
            </button>
        </div>
    )
}

export default HeaderLink;