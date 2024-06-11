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
        <div class="w-full">
            <div class="h-8 w-full flex justify-start items-center">
                <div class="aspect-square h-full relative flex justify-start items-center">
                    <Image src="/sample_logo.jpg" layout="fill" objectFit="contain"/>
                </div>
                <div class="w-full h-full flex justify-end">
                    <div class="relative h-full aspect-square"><Image src="/x.png" fill objectFit="contain" /></div>
                    <div class="relative h-full aspect-square"><Image src="/coconara.png" fill objectFit="contain" /></div>
                </div>
            </div>
            <div class="xl:mr-12 h-8 flex items-end justify-end">
                <HeaderLink text="Home" jptext="ホーム"/>
                <HeaderLink text="Service" jptext="サービス"/>
                <HeaderLink text="Work" jptext="ワーク"/>
                <HeaderLink text="Contact" jptext="コンタクト" onClick={onClickContact}/>
            </div>
        </div>
    )
}

export default Header;