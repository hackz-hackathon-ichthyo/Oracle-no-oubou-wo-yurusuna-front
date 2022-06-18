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
    <div>
      <p>{state.name}</p>
      <p>{state.message}</p>
    </div>
  )
}
