import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMovie from "../components/OneMovie";
import { client } from '../../../libs/microcms';
import { FadeIn } from "../components/FadeIn";


const Service = () => {
    return (
        <div>
            <Header />
            <main className="mx-4 mt-2 md:mt-3 xl:mt-4">
            <h2 className="text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:mb-1 xl:mb-2 text-red-400 font-bold">Service</h2>
              <Plans />
            </main>
            
            <p className="mt-4 text-sm sm:text-xs md:text-sm xl:text-base 2xl:text-lg text-center font-bold">適宜その時の案件の数にもよりますが<br/>ショート1本5000円<br/>下記メールアドレスまでお気軽にご相談ください！<br/>都度相談になりますが最短1日〜1週間以内の納品になります。</p>
            <Footer />
        </div>
    )
}

async function getPricePosts() {
    const data = await client.get({
      endpoint: 'price', // 'blog'はmicroCMSのエンドポイント名
      queries: {
        fields: 'plan_id,plan_name,description,month_price,short_amount,long_amount,deadline,color',  // idとtitleを取得
        limit: 10,  // 最新の5件を取得
      },
    });
    return data.contents;
  }
  
  async function Plans() {
    const posts = await getPricePosts();
    posts.sort((a, b) => a.plan_id - b.plan_id)

    const p_style = `
      text-sm md:text-base lg:text-lg xl:text-sl 2xl:text-2xl
      pb-1 xl:pb-2
    `
    
    return (
      <ul className="grid grid-cols-12 gap-4">
        {posts.map((post, index) => {
            return(
              <li key={index} className="text-center col-start-2 col-span-10 sm:col-span-4 sm:col-start-auto">
                <h3 className={StyleDecede(post).header}>
                  {post.plan_name}
                </h3>
                <div className={StyleDecede(post).body}>
                  <p className={StyleDecede(post).price}>
                    ￥{post.month_price}
                  </p>
                  <p className={p_style}><span>ショート動画：</span><span className={StyleDecede(post).text}>{post.short_amount}本</span></p>
                  <p className={p_style}><span>フル動画：</span><span className={StyleDecede(post).text}>{post.long_amount}本</span></p>
                  <p className={p_style}><span>納期：</span><span className={StyleDecede(post).text}>{post.deadline}</span></p>
                  
                </div>
                <FadeIn><div className="text-sm sm:text-xs md:text-sm xl:text-base 2xl:text-lg mb-4">{post.description.split("\n").map(des => {return(<p>{des}</p>)})}</div></FadeIn>
              </li>
            )
        })}
      </ul>
    )
  }
  
  function StyleDecede(post) {
    switch(post.color) {
      case "red":
        var header_style = 'border border-red-200 bg-red-200 py-2 font-bold md:text-xl'
        var body_style = "border border-red-200 p-2 pb-4 mb-2 md:pg-8"
        var price_style = "text-red-600 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
        var text_style = "text-red-600 font-bold my-2 md:my-4 "
        break
      case "blue":
        var header_style = 'border border-blue-200 bg-blue-200 py-2 font-bold md:text-xl'
        var body_style = "border border-blue-200 p-2 pb-4 mb-2 md:pg-8"
        var price_style = "text-blue-700 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
        var text_style = "text-blue-700 font-bold my-2 md:my-4"
        break
      case "yellow":
        var header_style = 'border border-yellow-200 bg-yellow-200 py-2 font-bold md:text-xl'
        var body_style = "border border-yellow-200 p-2 pb-4 mb-2 md:pg-8"
        var price_style = "text-yellow-600 text-xl font-bold my-2 md:my-4 md:text-2xl lg:text-4xl"
        var text_style = "text-yellow-600 font-bold my-2 md:my-4"
        break
      case "purple":
        var header_style = 'border border-purple-200 bg-purple-200 py-2 font-bold md:text-xl'
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

export default Service;