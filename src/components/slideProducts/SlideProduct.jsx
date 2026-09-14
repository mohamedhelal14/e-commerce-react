import React from 'react'

import Product from './product'

import './SlideProduct.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation ,Autoplay } from 'swiper/modules'

function SlideProduct({data , title}) {
  return (
    <div className="slide_products slide">

      <div className="container">

        <div className="top_slide">
          <h2>{title}</h2>
          <p>Lorem, ipsum dolor sit amet consect</p>
        </div>

       <Swiper
    loop={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    }}
    slidesPerView={5}
    spaceBetween={20}
    navigation={true}
    modules={[Navigation, Autoplay]}
    className="mySwiper"
>

 {data?.map((item) => {
  return (
    <SwiperSlide key={item.id}>
      <Product item={item} />
    </SwiperSlide>
  )
})}   

          

        </Swiper>

      </div>

    </div>
  )
}

export default SlideProduct 