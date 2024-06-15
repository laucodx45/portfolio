import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/404FEAC7-F425-44C9-A6A8-60700C141F8C.jpg" alt="headshot" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p className='about-me-info'>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address about-me-info">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    {/* <span>{resumeData.website}</span> */}
                    <a href="mailto:lau-cody@outlook.com">Contact Me</a>
       			   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}