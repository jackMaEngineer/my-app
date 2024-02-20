/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-25 22:37:54
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 22:41:20
 * @FilePath: /my-app/app/api/user/route.js
 */
export async function GET(request) {
    const users = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' }
    ]
    return new Response(JSON.stringify(users))
}
