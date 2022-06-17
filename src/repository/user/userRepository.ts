import User from '~/entity/User'

export default interface UserRepository {
  getUser(): User
}
