'use clinet'

import Image from 'next/image'

const Footer = () => {
    return (
        <div class="bg-gray-200 w-full mt-12 flex flex-col items-start">
            <div class="grid grid-cols-3 w-full">
                <div class="flex flex-col items-start m-2">
                    <div>ホーム</div>
                    <div>サービス</div>
                    <div>ワーク</div>
                    <div>コンテンツ</div>
                </div>
                <div class="col-span-2 m-2 flex flex-col justify-center items-center">
                    <div class="text-xl">aaaaaaa@aaaaaaaa.com</div>
                    <div>
                        <div>X（旧twitter）</div>
                        <div>ココナラ</div>
                    </div>
                </div>
            </div>
            
            <div class="w-full bg-gray-600 flex justify-center text-sm text-white">copyright:gtvofromb@gmail.com</div>
        </div>
    )
}

export default Footer;