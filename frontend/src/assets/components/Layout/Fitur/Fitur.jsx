import React from "react";
import "./fitur.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import { BsMusicNoteBeamed, BsGiftFill } from "react-icons/bs";
import { MdAutoAwesome } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


function Fitur() {
    return (
        <div className="fitur" id="fitur">
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
                                    <MdAutoAwesome className="icons" />
                                </div>
                                <div className="fitur-name">Custom Domain</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <BsMusicNoteBeamed className="icons" />
                                </div>
                                <div className="fitur-name">Backsound</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <MdAutoAwesome className="icons" />
                                </div>
                                <div className="fitur-name">Ucapan & Do'a</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <FaMapMarkerAlt className="icons" />
                                </div>
                                <div className="fitur-name">Navigasi Lokasi</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <BsGiftFill className="icons" />
                                </div>
                                <div className="fitur-name">Amplop Online</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="fitur-list small">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={true}
                        loop={true}
                        centeredSlides={false}
                        slidesPerView={1.3}
                        spaceBetween={30}
                        speed={1000}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <MdAutoAwesome className="icons" />
                                </div>
                                <div className="fitur-name">Custom Domain</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <BsMusicNoteBeamed className="icons" />
                                </div>
                                <div className="fitur-name">Backsound</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <MdAutoAwesome className="icons" />
                                </div>
                                <div className="fitur-name">Ucapan & Do'a</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <FaMapMarkerAlt className="icons" />
                                </div>
                                <div className="fitur-name">Navigasi Lokasi</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="fitur-card">
                                <div className="fitur-card-img">
                                    <BsGiftFill className="icons" />
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