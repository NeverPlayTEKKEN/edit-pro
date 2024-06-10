'use client'

const HeaderLink = (props) => {

    return (
        <div class="w-16 m-1 hover:text-orange-500">
            <button
                onClick={props.onClick}
                class="w-full text-xl hover:underline"
            >
                {props.text}
            </button>
            <div class="w-full text-xs flex justify-center">{props.jptext}</div>
        </div>
    )
}

export default HeaderLink;