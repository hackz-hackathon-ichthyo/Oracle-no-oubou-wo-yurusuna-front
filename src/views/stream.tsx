import User from '~/entity/User'
import Chat from '~/layouts/Chat'
import Header from '~/layouts/Header'
import Main from '~/layouts/Main'
import ProggressBar from '~/layouts/ProggressBar'

interface Props {
  user?: User
}

function Stream(props: Props) {
  return (
    <div>
      <Header user={props.user} />
      <Main />
      <Chat />
      <ProggressBar />
    </div>
  )
}

export default Stream
