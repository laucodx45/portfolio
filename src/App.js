import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
// import Testimonials from  './components/Testimonials';
// import ContactUs from './components/ContactUs';
// import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      modalContent: {},
    };
  }

  openModal = (item) => {
    this.setState({
      isModalOpen: true,
      modalContent: item,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalContent: {},
    });
  };

  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio 
          resumeData={resumeData}
          isModalOpen={this.state.isModalOpen}
          modalContent={this.state.modalContent}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;