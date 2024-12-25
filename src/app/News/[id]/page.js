
import { client } from '../../../../libs/microcms'
import Header from '../../components/Header'
import parse from 'html-react-parser'
import styles from './page.module.css'
import Footer from '../../components/Footer'

const GetNewsContent = async (id) => {
  
  const data = await client
  .getListDetail({
    endpoint: 'news',
    contentId: `${id}`,
  })
  return data

}

const NewsPage = async (params) => {
    const res = await GetNewsContent(params.params.id)

    console.log(res)

    return (
      <div className="h-screen">
        <Header />
        <section className='my-2 md:my-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12'>
          <div className={styles.body}>{parse(res.body)}</div>
        </section>
        <Footer />
      </div>
    )
}

export default NewsPage;