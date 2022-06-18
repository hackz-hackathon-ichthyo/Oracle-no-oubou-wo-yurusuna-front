import { useCallback, useState } from 'react'
import MyModal from './Modal'

interface Props {
  client_id: number
}

const ChannelCreateButton = (props: Props) => {
  const [isShow, setIsShow] = useState(false)
  const onClick = useCallback(() => {
    setIsShow(true)
  }, [isShow])

  return (
    <>
      <button onClick={onClick}>Create Channel</button>
      <MyModal isShow={isShow} setIsShow={setIsShow} cid={props.client_id} />
    </>
  )
}

export default ChannelCreateButton
