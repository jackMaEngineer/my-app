/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 23:16:20
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-24 14:48:45
 * @FilePath: /my-app/pages/article/[id].tsx
 */
import { getArticleData, getAllArticleIds } from './api'
interface Article {
    id: string
    title: string
    content: string
}
interface ArticlePageProps {
    article: Article
}
const Article: React.FC<ArticlePageProps> = ({ article }) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const ids = await getAllArticleIds()
    console.log(ids);
    const paths = ids.map((id) => ({
        params: { id }
    }))

    return {
        paths,
         // fallback为false则代表任何未由getStaticPaths返回的path所对应的路由都会导致404页面，至于fallback为true的效果，参考官方文档
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const article = await getArticleData(params.id)
    return {
        props: {
            article
        }
    }
}

export default Article
