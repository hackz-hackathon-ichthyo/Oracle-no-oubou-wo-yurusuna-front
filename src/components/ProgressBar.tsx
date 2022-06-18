import axios from 'axios'
import { useEffect, useState } from 'react'

const proggressApi = 'progress'
const instance = axios.create({
  baseURL: 'https://api.deathmatv.online/',
})

interface Progress {
  count: number
  open_cnt: number
  progress: number
}

const intervalMs = 1000

const ProgressBar = () => {
  const [count, setCount] = useState(0)
  const [progress, setProgress] = useState({
    count: 0,
    open_cnt: 0,
    progress: 0,
  })
  useEffect(() => {
    const intervalId = setInterval(() => {
      instance
        .get(proggressApi)
        .then((response) => {
          setProgress(JSON.parse(response.data))
          setCount(count + 1)

          console.log(count + ' ' + response.data)
        }) //成功した場合、postsを更新する（then）
        .catch(() => {
          console.log('通信に失敗しました')
        })
    }, intervalMs)

    return () => {
      clearInterval(intervalId)
    }
  }, [progress])

  return (
    <progress id="issue_progress" max="1" value={progress.progress}></progress>
  )
}

export default ProgressBar
