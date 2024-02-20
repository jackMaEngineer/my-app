/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-23 10:19:33
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-24 09:49:12
 * @FilePath: /my-app/app/layout.tsx
 */
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'
const roboto = Roboto({ weight: ['400', '500', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
            </head>
            <body className={`${roboto.className} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}