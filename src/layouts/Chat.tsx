import { useLayoutEffect, useRef, useState } from 'react'
import { Message } from '@/components/Message'
import { GraphQLChatService } from '@/utils'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import { DethamaTVChatMessage } from '@/types/API'

interface Props {
  user_name: string
  message: string
  create_at: string
}

const initState: Props = {
  user_name: '',
  message: '',
  create_at: format(new Date(), 'yyyy/MM/dd HH:mm', { locale: ja }),
}

export const Chat = (state: Props = initState) => {
  const { messages, sendMessage } = GraphQLChatService({
    user_name: '管理人',
    message: `ようこそ、${state.user_name}さん`,
    id: '',
    __typename: 'DethamaTVChatMessage',
    create_at: new Date().getTime().toString(),
    channel_id: '1',
  })
  const scrollBottomRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')

  const submitMessage = () => {
    if (text.length === 0) return
    sendMessage({
      id: '',
      message: text,
      user_name: state.user_name,
      channel_id: '1',
      create_at: new Date().getTime().toString(),
      __typename: 'DethamaTVChatMessage',
    })
    setText('')
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleButtonClick = () => {
    submitMessage()
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleOnKeydown = (event) => {
    if (event.keyCode == 13) {
      submitMessage()
    }
  }
  useLayoutEffect(() => {
    if (scrollBottomRef && scrollBottomRef.current) {
      scrollBottomRef?.current?.scrollIntoView()
    }
  })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div
      style={style.body}
      className={'d-flex flex-column justify-content-between'}
    >
      <div className={'overflow-scroll mh-100'} style={style.listBox}>
        <div>
          {messages.map((msg: DethamaTVChatMessage, idx: number) => {
            return (
              <Message
                key={idx}
                user_name={msg.user_name}
                message={msg.message}
                create_at={msg.create_at}
                __typename={msg.__typename}
                id={msg.id}
                channel_id={msg.channel_id}
              />
            )
          })}
          <div ref={scrollBottomRef}></div>
        </div>
      </div>
      <div className={'input-group mb-3'}>
        <input
          type="text"
          placeholder="メッセージ"
          value={text}
          className={'form-control'}
          onChange={handleInputChange}
          onKeyDown={handleOnKeydown}
        />
        <button disabled={!text} onClick={handleButtonClick}>
          送信
        </button>
      </div>
    </div>
  )
}

const style = {
  body: {
    height: '700px',
  },
  listBox: {},
}
