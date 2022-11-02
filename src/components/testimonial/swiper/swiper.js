// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialImage from '../../../assets/images/TestImg.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./swiper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
     
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="quotationContainer"></div>
          <h1 className="header">My Testimonial</h1>
          <p className="Paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi semper consectetur mattis egestas nec molestie
          consectetur senectus dignissim. Pulvinar volutpat sed maecenas nec eget. Nisi enim, faucibus enim, lectus velit diam.
          </p>
          <img src={TestimonialImage} className="TestimonialImage" />
          <p className="testimonialName">HafSoh Omolola</p>
          <p className="testimonialPosition">CEO LegalDesigner</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="quotationContainer"></div>
          <h1 className="header">My Testimonial</h1>
          <p className="Paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi semper consectetur mattis egestas nec molestie
          consectetur senectus dignissim. Pulvinar volutpat sed maecenas nec eget. Nisi enim, faucibus enim, lectus velit diam.
          </p>
          <img src={TestimonialImage} className="TestimonialImage" />
          <p className="testimonialName">HafSoh Omolola</p>
          <p className="testimonialPosition">CEO LegalDesigner</p>
        </SwiperSlide>
        <SwiperSlide>
        <div className="quotationContainer"></div>
          <h1 className="header">My Testimonial</h1>
          <p className="Paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi semper consectetur mattis egestas nec molestie
          consectetur senectus dignissim. Pulvinar volutpat sed maecenas nec eget. Nisi enim, faucibus enim, lectus velit diam.
          </p>
          <img src={TestimonialImage} className="TestimonialImage" />
          <p className="testimonialName">HafSoh Omolola</p>
          <p className="testimonialPosition">CEO LegalDesigner</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
