import Header from "../components/Header";
import Footer from "../components/Footer";
import OneMovie from "../components/OneMovie";
import { client } from '../../../libs/microcms';


const Service = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center"><Plans /></div>
            
            <div class="text-sm text-center font-bold mb-6">
                <p>各種プランは1,000~5,000円にてお急ぎ対応できます。</p>
                <p>下記メールアドレスまでお気軽にご相談ください！</p>
            </div>
            <Footer />
        </div>
    )
}

async function getPricePosts() {
    const data = await client.get({
      endpoint: 'price', // 'blog'はmicroCMSのエンドポイント名
      queries: {
        fields: 'plan_id,plan_name,description,month_price,short_amount,long_amount,deadline,color',  // idとtitleを取得
        limit: 5,  // 最新の5件を取得
      },
    });
    return data.contents;
  }
  
  async function Plans() {
    const posts = await getPricePosts();
    posts.sort((a, b) => a.plan_id - b.plan_id)
    
    return (
      <ul className="md:w-3/5 w-full mx-2 md:mx-0 md:mt-10 md:mb-5 text-center">
        {posts.map((post, index) => {
            return(
              <li key={index} className="md:mb-8">
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
                  <br/>
                  <div>{post.description.split("\n").map(des => {return(<p>{des}</p>)})}</div>
                </div>
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