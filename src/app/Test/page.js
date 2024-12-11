// app/page.tsx
import Link from 'next/link';
import { client } from '../../../libs/microcms';


// microCMSからブログ記事を取得
async function getBlogPosts() {
  const data = await client.get({
    endpoint: 'price', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id,plan_name',  // idとtitleを取得
      limit: 5,  // 最新の5件を取得
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();
  console.log(posts)

  return (
    <main>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}> {/* 記事へのリンクを生成 */}
              {post.id}
              {post.plan_name} {/* タイトルを表示 */}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}