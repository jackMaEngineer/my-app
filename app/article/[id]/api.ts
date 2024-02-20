/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 23:18:55
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-02-20 10:35:52
 * @FilePath: /my-app/app/article/[id]/api.ts
 */

const articles = [
    { id: '1', title: '文章1', content: '这是文章1的内容' },
    { id: '2', title: '文章2', content: '这是文章2的内容' },
    { id: '3', title: '文章2', content: '这是文章3的内容' }
    // 更多文章...
]

export async function getArticleData(id: any) {
    // 在实际应用中，这里可能是对API的调用
    return articles.find((article) => article.id === id)
}

export async function getAllArticle() {
    // 这里返回所有文章的ID
    return articles
}
