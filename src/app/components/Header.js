import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    return (
        <>
        <div className={`
            top-0 z-50 sticky items-center 
            w-full h-8 bg-white
            md:h-10 sm:shadow-lg grid grid-cols-12
            lg:h-16
            `}
        >
            <div className="sm:col-span-6"></div>
            <HeaderLink text="Home" />
            <HeaderLink text="Service" />
            <HeaderLink text="Work" />
            <HeaderLink text="About" />
            <div class="relative h-full cursor-pointer md:m-1 lg:m-2 xl:m-6 col-start-11">
                <a href="https://x.com/clip_rize" target="_blank" rel="noopener noreferrer">
                    <Image src="/x.png" fill objectFit="contain" />
                </a>
            </div>
            <div class="relative h-full cursor-pointer md:m-1 lg:m-2 xl:m-6">
                <a href="https://x.com/clip_rize" target="_blank" rel="noopener noreferrer">
                    <Image src="/coconara.png" fill objectFit="contain" />
                </a>
            </div>
        </div>
        <HeaderBottum />
        </>
    )
}

const HeaderLink = (props) => {
    let link = props.text
    if(props.text == "Home"){
        link = ""
    }
    return (
        <Link
            href={"./" + link}
            className={`
                w-full h-full items-center justify-center transaction-colors duration-300
                text-sm hidden
                sm:flex
                md:text-sm 
                lg:text-xl
                xl:text-2xl
                hover:bg-red-400

            `}
        >{props.text}</Link>
    )
}

const HeaderBottum = () => {
    return (
        <ul className='sm:hidden flex text-sm justify-end'>
            <li className='mx-1 px-1 bg-gray-100 rounded'><Link href="./">Home</Link></li>
            <li className='mx-1 px-1 bg-gray-100 rounded'><Link href="./Service">Service</Link></li>
            <li className='mx-1 px-1 bg-gray-100 rounded'><Link href="./Work">Work</Link></li>
            <li className='mx-1 px-1 bg-gray-100 rounded'><Link href="./About">About</Link></li>
        </ul>
    )
}

export default Header;