import React from "react";
import "./review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import Profile from "../../img/profile.png"

function Slider() {
    return (
        <Swiper
        modules={[Autoplay]}
            loop={true}
            autoplay={true}
            centeredSlides={true}
            slidesPerView={3}
            speed={1000}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="review-card-content">
                    <div className="review-card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the
                            1500s, when an unknown printer took a galley of type and
                            scrambled it to
                            make a type specimen book. </p>
                    </div>
                    <div className="review-profile">
                        <img src={Profile} />
                        <div className="name">Nama Orang</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="review-card-content">
                    <div className="review-card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the
                            1500s, when an unknown printer took a galley of type and
                            scrambled it to
                            make a type specimen book. </p>
                    </div>
                    <div className="review-profile">
                        <img src={Profile} />
                        <div className="name">Nama Orang</div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="review-card-content">
                    <div className="review-card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the
                            1500s, when an unknown printer took a galley of type and
                            scrambled it to
                            make a type specimen book. </p>
                    </div>
                    <div className="review-profile">
                        <img src={Profile} />
                        <div className="name">Nama Orang</div>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide><div className="review-card-content">
                    <div className="review-card-body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the
                            1500s, when an unknown printer took a galley of type and
                            scrambled it to
                            make a type specimen book. </p>
                    </div>
                    <div className="review-profile">
                        <img src={Profile} />
                        <div className="name">Nama Orang</div>
                    </div>
                </div></SwiperSlide>
        </Swiper>
    );
}

function Review() {
    return (
        <div className="review">
            <div className="container">
                <div className="review-content">
                    <div className="review-title">APA KATA PELANGGAN</div>
                    <div className="review-card">
                    <Slider />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review