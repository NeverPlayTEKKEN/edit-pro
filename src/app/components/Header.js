'use client'

import HeaderLink from "./HeaderLink";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()

    const onClickContact = () => {
        router.push('/Contact')
    }

    return (
    <>
        <header class="flex h-12 md:h-16 w-full border">
            <div class="aspect-square h-full relative flex justify-start items-center">
                <Image src="/sample_logo.jpg" layout="fill" objectFit="contain"/>
            </div>
            <div class="h-full w-full flex justify-center items-center"></div>
            <div class="hidden md:visible mr-8 xl:mr-12 h-full md:flex items-center justify-end ">
                <HeaderLink text="Home" jptext="ホーム"/>
                <HeaderLink text="Service" jptext="サービス"/>
                <HeaderLink text="Work" jptext="ワーク"/>
                <HeaderLink text="Contact" jptext="コンタクト" onClick={onClickContact}/>
            </div>
            <div class="visible md:hidden aspect-square h-full border flex items-center justify-center">
            </div>
        </header>
    </>
    )
}

export default Header;