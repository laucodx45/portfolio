import React, { Component } from 'react';
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

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item)=>{
                return(
                  <div className="columns portfolio-item">
                    <div className="item-wrap">
                      <div onClick={() => openModal(item)}>
                          <img src={`${item.imgurl[0]}`} className="item-img" alt=''/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            {isModalOpen && (
              <div id="modal-01" className="modal">
                <div className="modal-content">
                  <div className='modal-header'>
                    <div className='closeModal-box'>
                      <h5 className='modal-name'>{modalContent.name}</h5>
                      <span className="close" onClick={closeModal}>&times;</span>
                    </div>
                    <p>current index : {modalGalleryIndex}</p>
                    <p>{modalContent.description}</p>
                  </div>
                  <img src={`${modalContent.imgurl[modalGalleryIndex]}`} alt='' />
                  <button onClick={previousPhoto}>prev</button>
                  <button onClick={nextPhoto}>next</button>
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