import React, { useRef, useEffect, useState } from "react";
import "../styles/Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Projects = () => {
  const [value, setValue] = useState(window.innerWidth < 600 ? 3 : 3);
  const [sp, setSp] = useState(window.innerWidth < 600 ? 0 : 30);

  useEffect(() => {
    const handleResize = () => {
      setValue(window.innerWidth < 600 ? 1 : 3);
      setSp(window.innerWidth < 600 ? 0 : 30);
    };

    // Listen for the window resize event
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // import "./styles.css";

  return (
    <div>
      <center>
        <div id="pro-hd">Our Projects</div>
      </center>
      <div id="pro-sec">
        <Swiper
          // effect={"coverflow"}
          // centeredSlides={true}
          
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false,
          // }}
            // slidesPerView={3}
          loop={true}
          slidesPerView={value}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 0,
          //   slideShadows: true,
          // }}
          grabCursor={true}
          pagination={true}
          modules={[ EffectCoverflow, Pagination]}
          className="mySwiper ss"
          spaceBetween={sp}
        >
          <SwiperSlide>
            <a
              href="https://priyansh-khunt.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/1.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://edu-qubit.netlify.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/2.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://kaffen-ten.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/3.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://we-go-gym.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/4.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://shipfox-qubit.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/5.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://thalasmile.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/6.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://myid-artist.netlify.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/7.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://qubit-tech.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/8.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://ptfo.vercel.app/" target="_blank" className="pro">
              <img src="./imgs/pro/9.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://nature-olive.vercel.app/"
              target="_blank"
              className="pro"
            >
              <img src="./imgs/pro/10.jpg" loading="lazy" alt="" />
            </a>
          </SwiperSlide>

          {/* <SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
