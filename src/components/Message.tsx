import { DeathmaTVChatMessage } from '@/types/API'
import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'

export const Message = (state: DeathmaTVChatMessage) => {
  return (
    <div className={'d-flex flex-column'}>
      <p style={style.main}>{state.message}</p>
      <div
        className={'d-flex flex-row justify-content-between'}
        style={style.sub}
      >
        <p>{state.user_name}</p>
        <p>
          {format(parseInt(state.create_at, 10), 'yyyy/MM/dd HH:mm', {
            locale: ja,
          })}
        </p>
      </div>
    </div>
  )
}

const style = {
  main: {
    borderRadius: '10px 10px 10px 10px',
    background: '#e0e0e0',
    padding: '10px 20px',
    marginBottom: '0',
  },
  sub: {
    fontSize: '0.7em',
  },
}
