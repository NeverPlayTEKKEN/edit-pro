'use client'

import HeaderLink from "./HeaderLink";

const Header = () => {
    return (
    <>
        <header class="flex h-12 md:h-16 w-full border">
            <div class="h-full w-full border flex justify-start items-center">img</div>
            <div class="h-full w-full border flex justify-center items-center"></div>
            <div class="mr-5 h-full w-full flex items-center justify-end ">
                <HeaderLink text="Home"/>
                <HeaderLink text="Service" />
                <HeaderLink text="Work" />
                <HeaderLink text="Contact" />
            </div>
        </header>
    </>
    )
}

export default Header;