import User from '~/entity/User'
import Header from '~/layouts/header'
interface Props {
  user: User
}

function Stream(props: Props) {
  return (
    <div>
      <Header user={props.user} />
    </div>
  )
}

export default Stream
