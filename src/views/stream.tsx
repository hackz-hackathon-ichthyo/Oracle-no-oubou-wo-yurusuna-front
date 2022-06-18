import User from '@/entity/User'
import { Chat } from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import { useState } from 'react'

interface Props {
  user?: User
}

function Stream(props: Props) {
  const [name, setName] = useState('anonymous')

  return (
    <div>
      <Header user={props.user} />
      <div className={'d-flex flex-row justify-content-evenly'}>
        <Player></Player>
        <Chat name={name} text={''} />
      </div>
    </div>
  )
}

export default Stream
