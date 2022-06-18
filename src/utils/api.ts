import axios from 'axios'
import { DEATH_API_URL } from '@/utils/constants'

interface ResponsePostChannelCreate {
  stream_url: string
  playback_url: string
  secret: string
}

const instance = axios.create({
  baseURL: DEATH_API_URL,
  headers: {},
})

export const postChannelCreate = async (cid: string) => {
  const result = await (
    await instance.post(
      'channel/create',
      { client_id: cid },
      { headers: { 'Content-type': 'text/plain' } }
    )
  ).data
  console.log(result)
  return JSON.parse(result) as ResponsePostChannelCreate
}

export default instance
