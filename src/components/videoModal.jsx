import React, { useState } from "react"
import ReactModal from 'react-modal'

const VideoModal = ({src, buttonLabel}) => {
  const [open, setOpen] = useState(false)
  ReactModal.setAppElement('body')
  return (
    <div> 
      <button onClick={() => setOpen(true)}>
        {buttonLabel}
      </button>
      <ReactModal isOpen={open} onRequestClose={() => setOpen(false)} style={{content: {backgroundColor: '#353131', display:'flex',}}} >
        <div style={{ width:'100%', height:'100%', justifyContent:'center'}}>
          <video controls style={{width: '100%', maxHeight:'95%'}}>
            <source src={src} type="video/mp4" />
          </video>
          <button onClick={() => setOpen(false)} style={{backgroundColor:'none', position:'absolute', top:'5px', right:'5px'}}>X</button>
        </div>
      </ReactModal>
    </div>
  )
}

export default VideoModal
