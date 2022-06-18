import User from '@/entity/User'
import { Chat } from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import ProggressBar from '@/layouts/ProggressBar'
import { useState } from 'react'

interface Props {
  user?: User
}

function Stream(props: Props) {
  const [name, setName] = useState('hoge')

  return (
    <div>
      <Header user={props.user} />
      <Player />
      <Chat name={name} text={''} />
      <ProggressBar />
      LoginButton
    </div>
  )
}

export default Stream
