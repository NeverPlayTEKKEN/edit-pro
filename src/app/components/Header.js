'use client'

import HeaderLink from "./HeaderLink";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Header = () => {
    const router = useRouter()

    const onClickHome = () => {
        router.push('/..')
    }

    const onClickService = () => {
        router.push('/Service')
    }

    const onClickWork = () => {
        router.push('/Work')
    }

    const onClickAbout = () => {
        router.push('/About')
    }

    return (
        <div class="w-full sticky top-0 md:mb-2 md:shadow bg-white z-50">
            <div class="h-12 md:h-16 w-full flex justify-start items-center p-2">
                <div class="aspect-square h-full relative flex justify-start items-center">
                    <Image src="/sample_logo.jpg" layout="fill" objectFit="contain"/>
                </div>
                <div class="w-full h-full flex justify-end">
                    <div class="relative h-full aspect-square cursor-pointer"><Image src="/x.png" fill objectFit="contain" /></div>
                    <div class="relative h-full aspect-square cursor-pointer"><Image src="/coconara.png" fill objectFit="contain" /></div>
                </div>
            </div>
            <div class="xl:mr-12 h-8 md:h-10 w-full flex items-end md:items-center justify-end md:justify-center">
                <HeaderLink text="Home" jptext="ホーム" onClick={onClickHome}/>
                <HeaderLink text="Service" jptext="サービス" onClick={onClickService}/>
                <HeaderLink text="Work" jptext="ワーク" onClick={onClickWork}/>
                <HeaderLink text="About" jptext="アバウト" onClick={onClickAbout}/>
            </div>
        </div>
    )
}

export default Header;