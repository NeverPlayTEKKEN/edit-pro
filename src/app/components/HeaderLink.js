const HeaderLink = (props) => {
    return (
        <button
            onClick={props.onClick}
            class="text-md hover:underline p-2 border"
        >{props.text}</button>
    )
}

export default HeaderLink;