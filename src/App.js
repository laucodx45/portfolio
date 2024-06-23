import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalContent: {},
      // photo defaults at 0
      modalGalleryIndex: 0
    };
  }
  
  // State management for modal
  openModal = (item) => {
    this.setState((prevState) => {
      return {
        isModalOpen: true,
        modalContent: item,
        modalGalleryIndex: 0
      }
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalContent: {},
    });
  };

  nextPhoto = () => {
    this.setState((prevState) => {
      // if index is still lower than the length of imgurl array, allow user to access next photo
      if (prevState.modalGalleryIndex < prevState.modalContent.imgurl.length - 1) {
        return { modalGalleryIndex: prevState.modalGalleryIndex + 1 };
      }
      return null;
    });
  };
  

  previousPhoto = () => {
    this.setState((prevState) => {
      if (prevState.modalGalleryIndex > 0) {
        return { modalGalleryIndex: prevState.modalGalleryIndex - 1 };
      }
      return null;
    });
  }

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume isModalOpen={this.state.isModalOpen} resumeData={resumeData}/>
        <Portfolio 
          resumeData={resumeData}
          isModalOpen={this.state.isModalOpen}
          modalContent={this.state.modalContent}
          openModal={this.openModal}
          closeModal={this.closeModal}
          nextPhoto={this.nextPhoto}
          modalGalleryIndex={this.state.modalGalleryIndex}
          previousPhoto={this.previousPhoto}
        />
        <Footer isModalOpen={this.state.isModalOpen} resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;