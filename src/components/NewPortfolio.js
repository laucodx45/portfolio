import React, { Component } from 'react';
// import BootStrapModal from './BootstrapModal';
export default class NewPorfolio extends Component {


  render() {
    let resumeData = this.props.resumeData;
    let isModalOpen = this.props.isModalOpen
    // let modalContent = this.props.modalContent
    let openModal = this.props.openModal
    // let closeModal = this.props.closeModal

    return (
      <section id="portfolio">
        <div className={`portfolio-min ${isModalOpen ? 'blur' : ''}`}>
          <div className='photoCollage-container' id='PreviousWork-section'>
            {resumeData.portfolio && resumeData.portfolio.map((item) => (
              <img src={`${item.imgurl[0]}`} className="item-img" alt='' onClick={() => openModal(item)}/>
            ))}
          </div>
        </div>
      </section>

      
    )
  }

}