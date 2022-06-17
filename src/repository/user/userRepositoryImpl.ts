import UserRepository from './userRepository'

export default function UserRepositoryImpl(): UserRepository {
  return {
    getUser() {
      return {
        name: 'テストユーザー',
        iconUrl: 'http://placehold.jp/120x120.png',
      }
    },
  }
}
