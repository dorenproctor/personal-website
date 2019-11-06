import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
<<<<<<< HEAD
=======
import ReactModal from 'react-modal'
>>>>>>> e8b8bfb4de10426856fb92af6ef754fe015696ac
import VideoModal from '../components/videoModal'

import oldExperience from "../assets/Old Mobile Experience.mp4"
import newExperience from "../assets/New Mobile Experience.mp4"

const WorkExperiencePage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Work Experience</h1>
      <br/>
      <h3>Developer at Daimler Trucking North America</h3>
      <p>This is where I currently work.</p>
      <p>My team focuses on Salesforce. I've made some cool stuff but I want to move away from Salesforce.</p>
      <br/><br/><br/>
      <h3>Intern at Home Depot QuoteCenter</h3>
      <p>Here I worked with 3 other interns to make an internal site mobile friendly.</p>
      <VideoModal src={oldExperience} buttonLabel='Before Video'/>
      <VideoModal src={newExperience} buttonLabel='After Video'/>
<<<<<<< HEAD
=======
      {/* <button onClick={() => setModalStates(true)} >See before and after videos</button> */}
      {/* <button onClick={() => setModalStates({...modalStates, beforeInternship:true})} >Before video</button> &nbsp;
      <button onClick={() => setModalStates({...modalStates, afterInternship:true})} >After video</button>
      <ReactModal isOpen={modalStates.beforeInternship} onRequestClose={() => setModalStates({...modalStates, beforeInternship:false})}
                  style={{content: {backgroundColor: '#353131', display:'flex',}}} >
        <div style={{ width:'100%', height:'100%', justifyContent:'center'}}>
          Before<br/>
          <video controls style={{width: '100%', maxHeight:'95%'}}>
            <source src={oldExperience} type="video/mp4" />
          </video>
        <button onClick={() => setModalStates({...modalStates, beforeInternship:false})} style={{backgroundColor:'none', position:'absolute', top:'5px', right:'5px'}}>X</button>
        </div>
      </ReactModal>
      <ReactModal isOpen={modalStates.afterInternship} onRequestClose={() => setModalStates({...modalStates, afterInternship:false})}
                  style={{content: {backgroundColor: '#353131', display:'flex',}}} >
        <div style={{ width:'100%', height:'100%', justifyContent:'center'}}>
          After<br/>
          <video controls style={{width: '100%', maxHeight:'95%'}}>
            <source src={newExperience} type="video/mp4" />
          </video>
        <button onClick={() => setModalStates({...modalStates, afterInternship:false})} style={{backgroundColor:'none', position:'absolute', top:'5px', right:'5px'}}>X</button>
        </div>
      </ReactModal> */}
>>>>>>> e8b8bfb4de10426856fb92af6ef754fe015696ac
      <br/><br/><br/>
      <h3>Intel NUC Challenge</h3>
      <p>This isn't <i>exactly</i> work experience, but I was on the team that won 1st place in an Intel competition.</p>
      <a href='https://blogs.intel.com/csr/2015/05/nuc-challenge'>https://blogs.intel.com/csr/2015/05/nuc-challenge</a>
    </Layout>
  )
}

export default WorkExperiencePage
