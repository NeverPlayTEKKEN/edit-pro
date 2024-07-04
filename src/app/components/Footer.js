'use clinet'

import Link from "next/link";

const Footer = () => {
    return (
        <div class="bg-gray-200 w-full mt-16 flex flex-col items-start">
            <div class="grid grid-cols-3 w-full">
                <div class="flex flex-col items-start m-2 md:ml-8">
                    <Link href="/"><div class="text-blue-700 hover:text-black underline cursor-pointer">ホーム</div></Link>
                    <Link href="/Service"><div class="text-blue-700 hover:text-black underline cursor-pointer">サービス</div></Link>
                    <Link href="/Work"><div class="text-blue-700 hover:text-black underline cursor-pointer">ワーク</div></Link>
                    <Link href="/About"><div class="text-blue-700 hover:text-black underline cursor-pointer">アバウト</div></Link>
                </div>
                <div class="col-span-2 m-2 flex flex-col justify-center items-center">
                    <div class="text-md xl:text-xl">aaaaaaa@aaaaaaaa.com</div>
                    <div>
                        <div class="text-blue-700 hover:text-black underline cursor-pointer">X（旧twitter）</div>
                        <div class="text-blue-700 hover:text-black underline cursor-pointer">ココナラ</div>
                    </div>
                </div>
            </div>
            
            <div class="w-full bg-gray-600 flex justify-center text-sm text-white">copyright:gtvofromb@gmail.com</div>
        </div>
    )
}

export default Footer;