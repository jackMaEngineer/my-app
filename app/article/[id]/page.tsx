/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-24 14:54:00
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-24 15:50:12
 * @FilePath: /my-app/app/article/[id]/page.tsx
 */
import { getArticleData, getAllArticle } from './api'

interface Article {
    id: string
    title: string
    content: string
}
export default async function Article({ params }: { params: { id: number | string } }) {
    console.log('->RUN 2', params)
    const data = (await getArticle(params.id)) as Article
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    )
}

export async function generateStaticParams() {
    const articles = await getAllArticle()
    return articles.map((article) => ({
        id: article.id.toString()
    }))
}

async function getArticle(id: number | string) {
    const article = await getArticleData(id)
    return article
}
