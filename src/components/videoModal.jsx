import React, { useState } from "react"
import ReactModal from 'react-modal'

const VideoModal = ({src, buttonLabel}) => {
  ReactModal.setAppElement('body')
  const [open, setOpen] = useState(false)
  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      maxWidth: '95vw',
      maxHeight: '90vh',
      marginRight: '-50%',
      backgroundColor: '#353131',
      transform: 'translate(-50%, -50%)'
    }
  }
  return (
    <div style={{display:'inline-block'}}> 
      <button onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>
      <ReactModal isOpen={open} onRequestClose={() => setOpen(false)} style={modalStyle} >
        <video muted controls style={{width: '100%', maxHeight:'80vh'}}>
          <source src={src} type="video/mp4" />
        </video>
        <button onClick={() => setOpen(false)} style={{backgroundColor:'none', position:'absolute', top:'5px', right:'5px'}}>X</button>
      </ReactModal>
    </div>
  )
}

export default VideoModal
