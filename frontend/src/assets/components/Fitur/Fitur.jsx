import React from "react";
import "./fitur.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import domainIcon from "../../img/domain-icon.svg"
import backsoundIcon from "../../img/backsound.svg"
import navIcon from "../../img/gps.svg"
import giftIcon from "../../img/gift.svg"

function Fitur() {
    return (
        <div className="fitur">
            <div className="container">
                <div className="fitur-header">
                    <h1 className="title">FITUR</h1>
                    <h1 className="title">KARTUNIKAH</h1>
                </div>
                <div className="fitur-list">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={true}
                        // loop={true}
                        centeredSlides={false}
                        slidesPerView={4.3}
                        spaceBetween={30}
                        speed={1000}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <img src={domainIcon} alt="" className="fitur-icon" />
                                </div>
                                <div className="fitur-name">Custom Domain</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <img src={backsoundIcon} alt="" className="fitur-icon" />
                                </div>
                                <div className="fitur-name">Backsound</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <img src={domainIcon} alt="" className="fitur-icon" />
                                </div>
                                <div className="fitur-name">Ucapan & Do'a</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <img src={navIcon} alt="" className="fitur-icon" />
                                </div>
                                <div className="fitur-name">Navigasi Lokasi</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <img src={giftIcon} alt="" className="fitur-icon" />
                                </div>
                                <div className="fitur-name">Amplop Online</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Fitur;