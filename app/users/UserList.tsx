/*
 * @Author: 丁攀峰 allen@leanktech.com
 * @Date: 2024-01-25 17:11:08
 * @LastEditors: 丁攀峰 allen@leanktech.com
 * @LastEditTime: 2024-01-25 17:11:22
 * @FilePath: /my-app/app/users/UserList.tsx
 */
type User = {
    id: string;
    name: string;
    email: string;
  };
  
  const UserList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await response.json();
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };
  
  export default UserList;