'use clinet'

import Image from 'next/image'

const Footer = () => {
    return (
        <div class="bg-gray-200 w-full mt-12 flex flex-col items-start">
            <div class="grid grid-cols-3 w-full">
                <div class="flex flex-col items-start m-2 md:ml-8">
                    <div class="hover:text-blue-700 hover:underline">ホーム</div>
                    <div class="hover:text-blue-700 hover:underline">サービス</div>
                    <div class="hover:text-blue-700 hover:underline">ワーク</div>
                    <div class="hover:text-blue-700 hover:underline">アバウト</div>
                </div>
                <div class="col-span-2 m-2 flex flex-col justify-center items-center">
                    <div class="text-md xl:text-xl">aaaaaaa@aaaaaaaa.com</div>
                    <div>
                        <div class="hover:text-blue-700 hover:underline">X（旧twitter）</div>
                        <div class="hover:text-blue-700 hover:underline">ココナラ</div>
                    </div>
                </div>
            </div>
            
            <div class="w-full bg-gray-600 flex justify-center text-sm text-white">copyright:gtvofromb@gmail.com</div>
        </div>
    )
}

export default Footer;