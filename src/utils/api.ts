import axios from 'axios'

interface ResponsePostChannelCreate {
  stream_url: string
  playback_url: string
  secret: string
}

const instance = axios.create({
  baseURL: 'https://api.deathmatv.online/',
  headers: {},
})

export const postChannelCreate = async (cid: number) => {
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
