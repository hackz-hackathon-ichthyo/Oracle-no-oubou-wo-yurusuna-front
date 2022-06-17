import UserRepository from './userRepository'

export default class UserRepositoryImpl implements UserRepository {
  public getUser() {
    return {
      name: 'テストユーザー',
      iconUrl: 'http://placehold.jp/120x120.png',
    }
  }
}
