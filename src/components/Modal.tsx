import { postChannelCreate } from '@/entity/api'
import { Box, Modal, Typography } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface Props {
  isShow: boolean
  cid: number
  setIsShow: (b: boolean) => void
}

const MyModal = (props: Props) => {
  const [broadcastInfo, setBroadcastInfo] = useState({
    broadcast_url: '',
    playback_url: '',
    secret: '',
  })
  useEffect(() => {
    if (props.isShow) {
      const result = postChannelCreate(props.cid)
      setBroadcastInfo(result)
    }
  }, [props.isShow])

  const handleClose = useCallback(() => {
    props.setIsShow(false)
  }, [])

  return (
    <Modal
      open={props.isShow}
      onClose={handleClose}
      aria-labelledby="info"
      aria-describedby="desc"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Info
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          broadcast_url {broadcastInfo.broadcast_url}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          playback_url {broadcastInfo.playback_url}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          secret {broadcastInfo.secret}
        </Typography>
      </Box>
    </Modal>
  )
}

export default MyModal
