/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 10:19:33
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 16:16:18
 * @FilePath: /my-app/app/page.tsx
 */
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <Link href={'/about'}>about</Link>
            <ul>
                <li>
                    <Link href={'/article/1'}>id1</Link>
                </li>
                <li>
                    <Link href={'/article/2'}>di2</Link>
                </li>
            </ul>
        </main>
    )
}
