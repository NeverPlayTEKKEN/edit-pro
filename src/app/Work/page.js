import Header from "../components/Header";
import Footer from "../components/Footer";
import { YouTubeEmbed } from "@next/third-parties/google";
import { client } from '../../../libs/microcms';

const Work = () => {
    return (
        <div>
            <Header />
            <h2 className="mt-2 md:mt-3 xl:mt-4 text-center md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:mb-1 xl:mb-2 text-red-400 font-bold">◆Work</h2>
            <Works />
            <Footer />
        </div>
    )
}

export default Work;

async function getPricePosts() {
    const data = await client.get({
      endpoint: 'work', // 'blog'はmicroCMSのエンドポイント名
      queries: {
        fields: 'tittle,video_id,content_id',  // idとtitleを取得
        limit: 50,  // 最新の20件を取得
      },
    });
    return data.contents;
  }
  
  async function Works() {
    const posts = await getPricePosts();
    posts.sort((a, b) => a.content_id - b.content_id)
    
    return (
      <ul className="grid sm:grid-cols-4 gap-4">
        {posts.map((post, index) => {
            return(
                <div class="mb-6">
                    <YouTubeEmbed videoid={post.video_id}/>
                    {post.tittle}
                </div>
            )
        })}
      </ul>
    )
  }