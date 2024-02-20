/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-25 17:05:48
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 17:11:45
 * @FilePath: /my-app/app/users/page.tsx
 */
import { Suspense } from 'react'
import UserList from './UserList'

const Page = async () => {
    return (
        <div className="m-4">
            <h1 className="text-lg font-bold">用户列表：</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <UserList />
            </Suspense>
        </div>
    )
}

export default Page
