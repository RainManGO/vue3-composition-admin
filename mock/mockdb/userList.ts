import { UserBean } from "controller/type";

/*
 * @Description: 所有的用户列表
 * @Author: ZY
 * @Date: 2020-12-28 14:58:13
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-28 15:16:58
 */
import faker from 'faker'

const userList: UserBean[] = [
    {
      id: 0,
      username: 'admin',
      password: 'any',
      name: 'Super Admin',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am a super administrator',
      email: 'admin@test.com',
      phone: '1234567890',
      roles: ['admin'],
    },
    {
      id: 1,
      username: 'editor',
      password: 'any',
      name: 'Normal Editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      introduction: 'I am an editor',
      email: 'editor@test.com',
      phone: '1234567890',
      roles: ['editor'],
    }
  ]

const userCount = 100

for (let i = 2; i < userCount; i++) {
  userList.push({
    id: i,
    username: 'user_' + faker.random.alphaNumeric(9),
    password: faker.random.alphaNumeric(20),
    name: faker.name.findName(),
    avatar: faker.image.imageUrl(),
    introduction: faker.lorem.sentence(20),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    roles: ['visitor']
  })
}

export default userList