import axios from "axios";

interface ResponsePostChannelCreate {
    broadcast_url: string,
    playback_url: string,
    secret: string
}

const instance = axios.create({
    baseURL: 'https://stg-api.deathmatv.online/',
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
})

export const postChannelCreate = (cid: number) => {
    let result = {
        broadcast_url: "",
        playback_url:"",
        secret: "",
    }
    instance.post("/channel/create", { client_id: cid }).then((response) => {
        result = JSON.parse(response.data) as ResponsePostChannelCreate
        console.log(result)
        return result
    }).catch(() => {
        console.log('通信に失敗しました')
    })

    result = {
        broadcast_url: "通信に",
        secret: "失敗",
        playback_url:""
    }
    return result
}

export default instance