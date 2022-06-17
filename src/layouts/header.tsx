import LoginButton from '~/components/auth/login'
import LogoutButton from '~/components/auth/logout'
import User from '~/entity/User'

interface Props {
  user?: User
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="title">デスマTV</div>
      {props.user ? (
        <div>
          <LogoutButton />
          <img className="userIcon" src={props.user.iconUrl} />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  )
}

export default Header
