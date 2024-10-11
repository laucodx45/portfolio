import React, { Component } from 'react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

export default class SwiperCom extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let modalContent = this.props.modalContent;

    return (
      <Swiper
          navigation
          loop={true}
          pagination={{ type: 'bullets' }}
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={swiper => console.log(swiper)}
        >
          {resumeData.portfolio && modalContent.imgurl ? modalContent.imgurl.map((image, index) => (
            <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={index}
                    className='photoModalGallery-img'
                    loading="lazy"
                    style={{backgroundColor:'#A69080'}}
                  />
                  <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          )): null}
        </Swiper>
    )
  }
}