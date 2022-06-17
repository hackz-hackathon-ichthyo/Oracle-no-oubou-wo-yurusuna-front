import { User } from '~/types/User'

interface Props {
  user: User
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="title">デスマTV</div>
      <div className="userIcon">{props.user.iconUrl}</div>
    </div>
  )
}

export default Header
