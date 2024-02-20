/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-25 17:18:18
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 17:22:09
 * @FilePath: /my-app/app/users/error.tsx
 */
'use client'
// 如果直接在 Page 目录下创建 error.tsx 文件，当发生 Unhandled Runtime Error 时，Next.js 将自动使用 error.ts 文件来处理错误。
// 默认情况下，App Router 中的所有组件都是服务器组件，并且在服务器端进行处理。 error.ts文件需要在客户端（浏览器）端进行处理，因此需要在文件开头添加“use client”。通过显式设置“使用客户端”，组件从服务器组件变为客户端组件。

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="m-4 font-bold">
            <p>{error.message}</p>
            <button className="px-2 py-1 text-white bg-blue-500 rounded-lg" onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}
