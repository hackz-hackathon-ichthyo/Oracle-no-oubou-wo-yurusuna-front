import { PlayerConfig, registerIVSTech } from 'amazon-ivs-player'
import React, { useEffect, useRef } from 'react'
import videojs, { VideoJsPlayer } from 'video.js'
import 'video.js/dist/video-js.css'

const AmazonIVSPlayer = () => {
  const playerRef = useRef<VideoJsPlayer>()

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://player.live-video.net/1.10.0/amazon-ivs-videojs-tech.min.js'
    document.body.appendChild(script)

    script.addEventListener('load', () => {
      const PLAYBACK_URL =
        'https://e7f98e7e3456.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.861540815413.channel.DFdnCnWsjvNF.m3u8'

      registerIVSTech(videojs, {} as PlayerConfig)

      // Initialize player
      const player = videojs(
        'amazon-ivs-videojs',
        {
          techOrder: ['AmazonIVS'],
        },
        () => {
          console.log('Player is ready to use!')

          player.src(PLAYBACK_URL)
        }
      )

      playerRef.current = player
    })

    return () => {
      // playerRef.current.dispose()
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div>
      <video
        id="amazon-ivs-videojs"
        className="video-js vjs-4-3 vjs-big-play-centered"
        controls
        autoPlay
        playsInline
        muted
        src="https://e7f98e7e3456.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.861540815413.channel.DFdnCnWsjvNF.m3u8"
      ></video>
    </div>
  )
}

export default AmazonIVSPlayer

// import { isPlayerSupported, create, PlayerConfig } from 'amazon-ivs-player'
// import React, { useEffect, useRef } from 'react'

// function AmazonIVSWorkaround() {
//   const divEl = useRef(null)
//   const videoEl = useRef(null)

//   useEffect(() => {
//     if (isPlayerSupported) {
//       const config = {
//         wasmWorker:
//           'https://player.live-video.net/1.7.0/amazon-ivs-videojs-tech.min.js',
//         wasmBinary: '',
//       } as PlayerConfig
//       const player = create(config)
//       player.attachHTMLVideoElement(
//         document.getElementById('video-player') as HTMLVideoElement
//       )
//       player.load(
//         'https://e7f98e7e3456.ap-northeast-1.playback.live-video.net/api/video/v1/ap-northeast-1.861540815413.channel.DFdnCnWsjvNF.m3u8'
//       )
//       player.play()
//     }
//   }, [])

//   return (
//     <div ref={divEl}>
//       <video
//         id="video-player"
//         ref={videoEl}
//         playsInline
//         autoPlay
//         height={300}
//         controls
//       />
//     </div>
//   )
// }

// export default AmazonIVSWorkaround
