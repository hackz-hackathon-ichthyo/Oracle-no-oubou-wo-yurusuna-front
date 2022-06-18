import React from 'react'
import LoginButton from '@/components/auth/login'
import { User } from '@auth0/auth0-react'
import LogoutButton from '@/components/auth/logout'

interface Props {
  user: User
}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div css={style.title}>デスマTV</div>
      {props.user ? (
        <div>
          <LogoutButton />
          <img src={props.user.picture} css={style.userIcon} />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  )
}

const style = {
  header: { flex: '1' },
  title: {
    fontSize: '30px',
    fontWeight: 'bold',
  },
  userIcon: {
    height: '50px',
    borderRadius: '50%',
  },
}

export default Header
