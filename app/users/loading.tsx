/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-25 17:09:41
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 17:16:49
 * @FilePath: /my-app/app/users/Loading.tsx
 */
// 使用loading.tsx时，会自动为整个页面设置Suspense，
export default function Loading() {
    return <div className="flex justify-center items-center h-screen font-bold">加载中...</div>
}
