import React from 'react'
import LoginButton from '@/components/auth/login'
import User from '@/entity/User'

interface Props {
  user?: User
}

const Header = (props: Props) => {
  console.log(props.user)
  return (
    <div className="header">
      <div className="title">デスマTV</div>
      {props.user ? (
        <div>
          <img className="userIcon" src={props.user.iconUrl} />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  )
}

export default Header
