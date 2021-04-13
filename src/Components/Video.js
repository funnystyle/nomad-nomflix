import React from "react";
import styled from "styled-components";
import SwiperCore, { Navigation, A11y, EffectCube } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import loader from "assets/loader.gif";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-cube/effect-cube.scss";

const Container = styled.div`
  width: 500px;
  background-image: url(${loader});
  background-repeat: no-repeat;
  background-position: center center;
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
  }
`;
SwiperCore.use([Navigation, A11y, EffectCube]);

const Video = ({ videos }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        navigation
        loop={true}
        effect="cube"
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {videos.results
          .filter((video) => video.site === "YouTube")
          .map((video, index) => (
            <SwiperSlide key={index}>
              <iframe
                width="500"
                height="280"
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};
export default Video;
