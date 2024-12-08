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
        <h3 style={{ display: 'flex', justifyContent: 'center' }}>Projects</h3>
        <div id='link-project'>
          <a
            href="https://github.com/laucodx45"
            target="_blank"
            rel="noopener noreferrer"
          >
              Visit my project's codebase on GitHub!
          </a>
        </div>
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