import React, { Component } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let isModalOpen = this.props.isModalOpen
    let modalContent = this.props.modalContent
    let openModal = this.props.openModal
    let closeModal = this.props.closeModal
    let nextPhoto = this.props.nextPhoto
    let modalGalleryIndex = this.props.modalGalleryIndex
    let previousPhoto = this.props.previousPhoto



    const isValidUrl = (string) => {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    };

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div id='link-project'>
              <a
                href="https://github.com/laucodx45"
                target="_blank"
                rel="noopener noreferrer"
              >
                  Visit my project's codebase on GitHub!
              </a>
            </div>
            <div id="portfolio-wrapper" className={`bgrid-quarters s-bgrid-thirds cf`}>
            <div className={`portfolio-min ${isModalOpen ? 'blur' : ''}`}>
              {
                resumeData.portfolio && resumeData.portfolio.map((item)=>{
                  return(
                    <div className='portfolio-item' onClick={() => openModal(item)}>
                      <img src={`${item.imgurl[0]}`} className="item-img" alt=''/>
                    </div>
                  )
                })
              }
            </div>
            {/* Modal */}
            {isModalOpen && (
              <div id="modal-01" className="modal">
                <div className="modal-content">
                  <div className='modal-header'>
                    <div className='closeModal-box'>
                      <h5 className='modal-name'>{modalContent.name}</h5>
                      <IoIosArrowBack className='arrow-icon' onClick={previousPhoto}/>
                      <IoIosArrowForward className='arrow-icon' onClick={nextPhoto}/>
                      <IoMdClose className='close' onClick={closeModal}/>
                    </div>
                    {/* this is where the url checker should be used */}
                    {isValidUrl(modalContent.description[modalGalleryIndex]) ? (
                      <a 
                        key={modalGalleryIndex} 
                        href={modalContent.description[modalGalleryIndex]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >View live</a>
                    ) : (
                      <p>{modalContent.description[modalGalleryIndex]}</p>
                    )}
                  </div>
                  <img src={`${modalContent.imgurl[modalGalleryIndex]}`} alt='' />
                  
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </section>
        );
  }
}