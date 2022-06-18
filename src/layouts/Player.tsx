import AmazonIVSPlayer from '@/components/AmazonIVSPlayer'

const Player = () => {
  return (
    <div className={'w-75'} style={style.body}>
      <p style={style.title}>Main</p>

      <div>
        <AmazonIVSPlayer />
      </div>
    </div>
  )
}

const style = {
  title: {
    color: 'red',
  },
  body: {
    backgroundColor: 'red',
  },
}

export default Player
