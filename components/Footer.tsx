/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 22:32:51
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 15:55:20
 * @FilePath: /my-app/components/Footer.tsx
 */
import Link from 'next/link'
const Footer = () => {
    return (
        <footer>
            <Link href={'/disclaimers'}>disclaimers</Link>
            <Link className='mx-2' href={'/terms'}>terms</Link>
            <Link href={'/privacy'}>privacy</Link>
        </footer>
    )
}

export default Footer
