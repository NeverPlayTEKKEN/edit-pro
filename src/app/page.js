import Header from "./components/Header";
import OneMovie from "./components/OneMovie";
import PlanBox from "./components/PlanBox";
import Footer from "./components/Footer";
import { FadeIn, FedIn } from './components/FadeIn'
import { client } from '../../libs/microcms'

const Home = () => {

  
  return (
    <div>
      <Header />
      <div>
        <OneMovie
          image_src = '/bg2.webp'
          tittle = {[<div class="md:pl-4">ちょっとだけ、</div>, <div>おもしろい</div>, <div>あなたに</div>]}
          description = {[<div class="flex justify-center">いつもおもしろくはいられないから</div>, <div class="flex justify-center">あなたが輝いた瞬間を切り抜きます</div>]}
        />
        <FadeIn>
        <div class="text-center md:text-base xl:text-xl bg-gray-200 text-sm py-4 mb-8 px-8 xl:py-12 xl:px-12">
          <div class="bg-white p-2 xl:p-8" >
          <p>配信をつけたらたくさんの視聴者で溢れ<br />
          コメントが読み切れない…</p>
          <br/>
          <p>そんな未来を一緒に掴みましょう！</p>

          <p>人気の配信者の<strong>“ほぼ全て”</strong>にあって<br />
          貴方に無いもの…</p>
          <br/>
          <p>それは<strong class="bg-yellow-300">「切り抜き動画」</strong>です。</p>
          <br/>
          <p>ClipRiZeは切り抜き動画の制作を<br/>代行するサービスです。</p>
        </div>
        </div>
        </FadeIn>
        <FadeIn>

          <div class="mx-2 md:mt-16 md:ml-6 flex justify-start items-center">
            <div class="h-[10px] w-[10px] mx-2 bg-red-600">　</div>
            <div class="text-md md:text-2xl xl:text-4xl">Plan</div>
          </div>
      
          <div class="md:mx-4 relative text-center">
            <Plans />
          </div>


          <div class="mx-4 mt-2 mb-8 md:mb-16 flex justify-center text-sm md:text-base xl:text-xl  border-b-4 border-gray-100 md:border-none">
            <div>
              <div class="w-fit">・様々なプランからお選びいただけます。</div>
              <div class="w-fit">・記載のプラン以外も相談できます。</div>
              <div class="w-fit md:border-b-4 border-gray-100">・お客様の満足のため全力疾走します！</div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>

          <div class="text-center bg-gray-200 text-sm  md:text-base xl:text-xl py-4 mb-8 px-8 xl:py-12 xl:px-12">
          <div class="bg-white p-2 xl:p-8" >
            <p class="text-slate-600">人が来ない…コメントが１…</p>
            <p class="text-slate-600">誰かに見つけてほしい…</p>
            <br/>
            <p>YouTubeショートやTikTokは</p>
            <p>再生数が上がりやすいので</p>
            <p><strong class="bg-yellow-300">魅力が必ず伝わります！</strong></p>
            <br/>
            <p>あなたが人気配信者になる</p>
            <p>お手伝いをさせてください！</p>
          </div>
        </div>
          
        </FadeIn>
        <Footer />
      </div>
    </div>
  )
}

export default Home;

async function getPricePosts() {
  const data = await client.get({
    endpoint: 'price', // 'blog'はmicroCMSのエンドポイント名
    customRequestInit: {
      cache: "no-store",
    },
    queries: {
      fields: 'plan_id,plan_name,description,month_price,short_amount,long_amount,deadline,color',  // idとtitleを取得
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

function StyleDecede(post) {
  switch(post.color) {
    case "red":
      var header_style = 'border border-red-200 bg-red-200 py-2'
      var body_style = "border border-red-200 p-2 pb-4 mb-2 md:pg-8"
      var price_style = "text-red-600 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
      var text_style = "text-red-600 font-bold my-2 md:my-4 "
      break
    case "blue":
      var header_style = 'border border-blue-200 bg-blue-200 py-2'
      var body_style = "border border-blue-200 p-2 pb-4 mb-2 md:pg-8"
      var price_style = "text-blue-700 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
      var text_style = "text-blue-700 font-bold my-2 md:my-4"
      break
    case "yellow":
      var header_style = 'border border-yellow-200 bg-yellow-200 py-2'
      var body_style = "border border-yellow-200 p-2 pb-4 mb-2 md:pg-8"
      var price_style = "text-yellow-600 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
      var text_style = "text-yellow-600 font-bold my-2 md:my-4"
      break
    case "purple":
      var header_style = 'border border-purple-200 bg-purple-200 py-2'
      var body_style = "border border-purple-200 p-2 pb-4 mb-2 md:pg-8"
      var price_style = "text-purple-700 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
      var text_style = "text-purple-700 font-bold my-2 md:my-4"
      break
  }

  const styles = new Object()
  styles.header = header_style
  styles.body = body_style
  styles.price = price_style
  styles.text = text_style
  return styles
}

export async function Plans() {
  const posts = await getPricePosts();
  posts.sort((a, b) => a.plan_id - b.plan_id)
  


  return (
    <ul className="md:grid md:grid-cols-3">
      {posts.map((post, index) => {
        if(index >= 3){
          return
        }else{
          return(
            <li>
              <h3 className={StyleDecede(post).header}>
                {post.plan_name}
              </h3>
              <div className={StyleDecede(post).body}>
                <p className={StyleDecede(post).price}>
                  ￥{post.month_price}
                </p>
                <p><span>ショート動画：</span><span className={StyleDecede(post).text}>{post.short_amount}本</span></p>
                <p><span>フル動画：</span><span className={StyleDecede(post).text}>{post.long_amount}本</span></p>
                <p><span>納期：</span><span className={StyleDecede(post).text}>{post.deadline}</span></p>
              </div>
            </li>
          )
        }
      })}
    </ul>
  )
}