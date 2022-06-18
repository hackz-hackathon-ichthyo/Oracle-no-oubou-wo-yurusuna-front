// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import User from '@/entity/User'
import { ProgressBar } from '@/components/ProgressBar'

interface Props {
  user?: User
}

export const Header = (props: Props) => {
  console.log(props.user)
  return (
    <div className="header">
      <div className="title" style={style.header}>
        デスマTV
      </div>
      <ProgressBar />

      {/*{props.user ? (*/}
      {/*  <div>*/}
      {/*    <img className="userIcon" src={props.user.iconUrl} />*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  <LoginButton />*/}
      {/*)}*/}
    </div>
  )
}

const style = {
  header: {
    fontSize: '3rem',
    fontFamily: 'DotGothic16',
  },
}

export default Header
