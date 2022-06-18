import User from '@/entity/User'
import Chat from '@/layouts/Chat'
import Header from '@/layouts/Header'
import Player from '@/layouts/Player'
import ProggressBar from '@/layouts/ProggressBar'

interface Props {
  user?: User
}

function Stream(props: Props) {
  return (
    <div>
      <Header user={props.user} />
      <Player />
      <Chat />
      <ProggressBar />
    </div>
  )
}

export default Stream
