'use client'
/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 10:26:24
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 17:08:12
 * @FilePath: /my-app/app/about/page.tsx
 */
import Link from 'next/link'
import { useState } from 'react'
export default function About() {
    const [count, setCount] = useState(0)
    return (
        <main>
            <Link href="/users" className="underline">
                User
            </Link>
            <h1>About page</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </main>
    )
}
