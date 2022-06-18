import { useState } from 'react'
import { Message } from '@/components/Message'
import { ChatService } from '@/utils'

interface Props {
  name: string
  text: string
}

const initState: Props = { name: '', text: '' }

export const Chat = (state: Props = initState) => {
  const [messages, sendMessage] = ChatService({
    name: '管理人',
    text: `ようこそ、${state.name}さん`,
  })

  const [text, setText] = useState('')

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleButtonClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sendMessage({ text: text, name: state.name })
    setText('')
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <div>
      <div className="input">
        <input
          type="text"
          placeholder="メッセージ"
          value={text}
          onChange={handleInputChange}
        />
        <button disabled={!text} onClick={handleButtonClick}>
          送信
        </button>
      </div>
      <ul>
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          messages.map((msg: Props, idx: number) => {
            return <Message key={idx} name={msg.name} message={msg.text} />
          })
        }
      </ul>
    </div>
  )
}
