import React from "react";
import Style from "./style.module.scss";
import Card from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SwiperNews = ({ title, data }) => {
  return (
    <div className="container">
      <div className={Style.swiperNews}>
        <h3 className="head">{title}</h3>

        <Swiper
          grabCursor
          spaceBetween={30}
          allowTouchMove={true}
          className={Style.swipper}
          slidesPerView={3}
          modules={[Navigation]}
          navigation
        >
          {data?.map((item, index) => {
            return (
              <SwiperSlide key={item?.id}>
                <Card
                  isSwiper
                  key={index}
                  title={item?.title}
                  image={item?.image?.newsImage}
                  desc={item?.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperNews;
