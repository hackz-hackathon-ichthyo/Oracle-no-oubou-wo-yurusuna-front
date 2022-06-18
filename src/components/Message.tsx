import { format } from 'date-fns'
import ja from 'date-fns/locale/ja'
interface Props {
  name: string
  message: string
}

const initState = {
  name: '',
  message: '',
}
export const Message = (state: Props = initState) => {
  return (
    <div className={'d-flex flex-column'}>
      <div className={'d-flex flex-row justify-content-between'}>
        <p>{state.name}</p>
        <p>{format(new Date(), 'yyyy/MM/dd HH:mm', { locale: ja })}</p>
      </div>
      <p style={style.main}>{state.message}</p>
    </div>
  )
}

const style = {
  main: {
    fontSize: '1.2em',
  },
}
