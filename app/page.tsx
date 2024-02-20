/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 10:19:33
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-02-20 11:01:24
 * @FilePath: /my-app/app/page.tsx
 */
import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <Link href={'/about'}>about</Link>
            <ul>
                <li>
                    <Link href={'/article/1'}>文章1</Link>
                </li>
                <li>
                    <Link href={'/article/2'}>文章2</Link>
                </li>
                <li>
                    <Link href={'/article/3'}>文章3</Link>
                </li>
            </ul>
        </main>
    )
}
