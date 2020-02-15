import { Document, Page } from 'react-pdf/dist/entry.webpack';

import React, { useState } from 'react'
import ReactModal from 'react-modal'
import PdfFile from '../../../static/assets/resume-gideon-felt.pdf'


ReactModal.setAppElement(".app-wrapper")

const ResumeModal = (props) => {
    const [ numPages, setNumPages ] = useState(null)
    const [ pageNumber, setPageNumber ] = useState(1)
    const [ blogModalIsOpen, setBlogModalIsOpen ] = useState(false)
    const [ options, setOptions ] = useState({ cMapUrl: 'cmaps/', cMapPacked: true, })
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            transform: "translate(-50%, -50%)",
            width: "70vw"
        },
        overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.75)"
        }
    }
        
    return (
        <ReactModal
        style={customStyles}
        onRequestClose={() => { props.handleModalClose() }}  isOpen={props.resumeModalIsOpen}>
            <div className="resume-controls" >
                <div onClick={()=> window.open(PdfFile, "_blank")} className="open-in-new-tab"><span>Open in new tab</span></div>
                <span className="modal-close-button" onClick={() => props.handleModalClose()}>X</span>
            </div>
            <div style={{height:"100%"}}>
                <iframe
                    title="Resume"
                    style={{ width: '100%', height: '100%' }}
                    src={PdfFile}
                />

            </div>
        </ReactModal>
    )
                
}

export default ResumeModal