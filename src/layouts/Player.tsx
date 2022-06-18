import React from 'react'

const Player = () => {
  return (
    <div className={'w-75'} css={style.body}>
      <p css={style.title}>Main</p>
    </div>
  )
}

const style = {
  title: {
    color: 'red',
  },
  body: {
    backgroundColor: 'red',
  },
}

export default Player
