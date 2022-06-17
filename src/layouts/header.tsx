import User from '~/entity/User'

interface Props {
  user: User
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="title">デスマTV</div>
      <img className="userIcon" src={props.user.iconUrl} />
    </div>
  )
}

export default Header
