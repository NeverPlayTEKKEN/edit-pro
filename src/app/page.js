import Header from "./components/Header";
import OneMovie from "./components/OneMovie";
import Footer from "./components/Footer";
import HeroImage from "./components/HeroImage"
import Anime from "./components/Anime"
import { FadeIn } from './components/FadeIn'
import { client } from '../../libs/microcms'
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  return (

    <div>
      <Header />
      <HeroImage />
      <News />
      <Sectino1 />
      <Plans />
      <Section2 />
      <Footer />
    </div>
  )
}

async function getNewsPosts() {
  const data = await client.get({
    endpoint: 'news', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,tittle',  // idとtitleを取得
      limit: 3,  // 最新の10件を取得
    },
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
     },
  });
  return data.contents;
}


const News = async () => {
  const posts = await getNewsPosts();
  return (
    <section className="mt-4 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
      <h3 className="text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-red-400 font-bold">News</h3>
      <ul className={`
        bg-red-100 p-2 md:p-4 xl:p-6
      `}>
        {posts.map((post, index) => {
          return <li className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-1 lg:py-2"><Link href={`/News/${post.id}`} className="hover:border-b-2 border-black border-b sm:border-b-0">{post.tittle}</Link></li>
        })}
      </ul>
    </section>
  )
}

const Sectino1 = () => {
  return (
    <section className={`
      bg-gradient-to-b from-white to-red-100 grid grid-cols-12 gap-4 px-4 py-4 lg:py-8 xl:py-12 2xl:py-16
    `}>
      <div className={`
        bg-white flex flex-col items-center justify-center text-center
        text-xs col-span-10 col-start-2
        py-2 rounded-sm
        sm:col-start-2 sm:col-span-5 sm:w-full sm:py-2
        md:text-sm md:rounded-md md:py-4
        lg:py-6 lg:text-base lg:rounded-lg
        xl:text-xl xl:rounded-xl
        2xl:text-2xl 2xl:rounded-2xl
      `}>
        <FadeIn>
        <p className="py-2">
          配信の開始ボタンを押したら<br/>
          たくさんのリスナーが遊びにきて<br/>
          コメントが読み切れない
        </p>
        </FadeIn>
        <FadeIn>
        <p className="py-2">そんな未来をつかみませんか？</p>
        </FadeIn>
        <FadeIn>
        <p className="py-2">
          人気配信者の<span className="font-bold">”ほぼすべて”</span>にあって<br/>
          あなたにないもの...
        </p>
        </FadeIn>
        <FadeIn>
        <p className="py-2">
          それは<span className="font-bold bg-yellow-200">切り抜き動画</span>です！
        </p>
        </FadeIn>
        <FadeIn>
        <p className="pt-2">
          ClipRiZeは切り抜き動画の制作を<br/>
          代行するサービスです。
        </p>
        </FadeIn>
      </div>
      <div className="hidden sm:flex sm:col-span-5 justify-center items-center md:p-2 lg:p-4 xl:p-6 2xl:p-8"><Image src="/idol.png" width={755} height={658} /></div>
    </section>
  )
}

async function getPricePosts() {
  const data = await client.get({
    endpoint: 'price', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'plan_id,plan_name,description,month_price,short_amount,long_amount,deadline,color',  // idとtitleを取得
      limit: 10,  // 最新の10件を取得
    },
  });
  return data.contents;
}

async function Plans() {
  const posts = await getPricePosts();
  posts.sort((a, b) => a.plan_id - b.plan_id)

  const plan_name_style = `
    sm:py-1
    md:text-lg
    lg:text-xl lg:py-2
    xl:text-2xl
    2xl:text-4xl 2xl:py-4
  `

  const month_price_style = `
    font-bold
    sm:py-1 sm:text-lg
    md:text-xl
    lg:text-2xl lg:py-2
    xl:text-3xl
    2xl:text-5xl 2xl:py-4
  `
  const plan_body_style = `
    text-sm
    sm:pt-1
    md:text-base
    lg:text-lg
    xl:text-xl
    2xl:text-3xl 2xl:pt-4
  `
  
  return (
    <section className="sm:px-4 mt-4 md:mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
      <h3 className="text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-red-400 font-bold">Plan</h3>
      <ul className="grid grid-cols-12 gap-4">
        {posts.map((post, index) => {
          if(index >= 3){
            return
          }else{
            return(
              <li key={"key" + index} className={`
                text-center border-red-400
                col-start-2 col-span-10 rounded border-4 py-4 
                sm:col-start-auto sm:col-span-4
                md:py-6
                lg:py-8 lg:border-6 lg:rounded-lg
                xl:py-10
                2xl:py-12 2xl:border-8 2xl:rounded-xl
              `}>
                <h3 className={plan_name_style}>
                  {post.plan_name}
                </h3>
                <div>
                  <FadeIn>
                  <p className={month_price_style}>
                    ￥{post.month_price}
                  </p>
                  <p className={plan_body_style}><span>ショート動画：</span><span className="font-bold">{post.short_amount}本</span></p>
                  <p className={plan_body_style}><span>フル動画：</span><span className="font-bold">{post.long_amount}本</span></p>
                  <p className={plan_body_style}><span>納期：</span><span className="font-bold">{post.deadline}</span></p>
                  </FadeIn>
                </div>
              </li>
            )
          }
        })}
      </ul>
      <FadeIn>
      <div className="w-full flex justify-end pr-8">
        <Link href="./Service" className={`
          mt-1 xl:mt-4 2xl:mt-6
          border-b border-black hover:text-red-400 hover:border-red-400
          md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl
        `}>詳細はこちら</Link>
      </div>
      </FadeIn>
      
    </section>
  )
}

const Section2 = () => {
  const frist_p_style = `
    bg-gray-300 text-center col-start-2
    col-span-5 py-2 rounded-sm
    sm:rounded sm:py-3 sm:col-start-2 sm:col-span-4
    xl:py-4 xl:col-start-2 xl:col-span-3
  `

  const second_p_style = `
    bg-gray-300 text-center col-start-4
    col-span-5 py-2 rounded-sm
    sm:rounded sm:py-3 sm:col-start-4 sm:col-span-4
    xl:py-4 xl:col-start-4 xl:col-span-3
  `

  const third_p_style = `
    bg-gray-300 text-center font-bold col-start-6
    col-span-6 py-3 rounded-sm
    sm:rounded sm:py-4 sm:col-start-6 sm:col-span-4
    xl:py-6 xl:col-start-6 xl:col-span-3
  `

  return (
    <section className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24">
      <div className={`
        grid grid-cols-12 gap-4
        text-xs
        sm:text-sm
        md:text-base
        lg:text-lg
        xl:text-xl
        2xl:text-2xl
      `}>
        <p className={frist_p_style}>同接がずっと1...</p>
        <p className={second_p_style}>コメントがない...</p>
        <p className={third_p_style}>だれかにみつけてほしい</p>
      </div>
      
      <FadeIn>
      <p className={`
        text-center mt-4 bg-red-100 flex items-center justify-center font-bold
        py-12
        sm:p-0 sm:h-screen sm:text-xl
        md:mt-8 md:text-2xl
        lg:mt-12 lg:text-3xl
        xl:mt-16 xl:text-4xl
        2xl:mt-20 2xl:text-5xl
      `}>
        YoutubeショートやTikTokは<br/>再生数があがりやすいので<br/>あなたの魅力が必ず伝わります！
      </p>
      </FadeIn>
    </section>
  )
}