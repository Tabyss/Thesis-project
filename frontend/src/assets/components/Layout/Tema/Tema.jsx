import React, { useState } from "react";
import "./tema.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import phoneframe from "../../../img/phone.png";
import template1 from "../../../img/Template-1.png";
import template2 from "../../../img/Template-2.png";
import template3 from "../../../img/Template-3.png";
import template4 from "../../../img/Template-4.png";
import template5 from "../../../img/Template-5.png";
import example1 from "../../../img/example-1.png";
import example2 from "../../../img/example-2.png";
import example3 from "../../../img/example-3.png";
import example4 from "../../../img/example-4.png";
import example5 from "../../../img/example-5.png";
import arrowup from "../../../img/arrow-up.svg";

function Tema() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="tema">
            <div className="container">
                <div className="tema-content">
                    <h1 className="tema-title small">PILIH TEMA</h1>
                    <div className="tema-phone">
                        <div className="swipe">SWIPE UP <img src={arrowup} /></div>
                        <div className="tema-phone-frame">
                            <img src={phoneframe} className="phone-img" />
                        </div>
                        <div className="tema-screen-view">
                            <img src={template1} className={activeIndex === 0 ? 'templateActive' : ''} onClick={() => handleClick(0)} />
                            <img src={template2} className={activeIndex === 1 ? 'templateActive' : ''} onClick={() => handleClick(1)} />
                            <img src={template3} className={activeIndex === 2 ? 'templateActive' : ''} onClick={() => handleClick(2)} />
                            <img src={template4} className={activeIndex === 3 ? 'templateActive' : ''} onClick={() => handleClick(3)} />
                            <img src={template5} className={activeIndex === 4 ? 'templateActive' : ''} onClick={() => handleClick(4)} />
                        </div>
                    </div>
                    <div className="tema-main">
                        <h1 className="tema-title">PILIH TEMA</h1>
                        <div className="tema-body">
                            <h4>Klik Tema Untuk Mencoba</h4>
                            <div className="tema-choose">
                                <button className={activeIndex === 0 ? 'exampleActive' : ''} onClick={() => handleClick(0)}><img src={example1} className="example" /></button>
                                <button className={activeIndex === 1 ? 'exampleActive' : ''} onClick={() => handleClick(1)}><img src={example2} className="example" /></button>
                                <button className={activeIndex === 2 ? 'exampleActive' : ''} onClick={() => handleClick(2)}><img src={example3} className="example" /></button>
                                <button className={activeIndex === 3 ? 'exampleActive' : ''} onClick={() => handleClick(3)}><img src={example4} className="example" /></button>
                                <button className={activeIndex === 4 ? 'exampleActive' : ''} onClick={() => handleClick(4)}><img src={example5} className="example" /></button>
                            </div>
                            <div className="tema-choose small">
                                <Swiper
                                    slidesPerView={2.3}
                                    spaceBetween={10}
                                    speed={1000}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => console.log(swiper)}
                                >
                                    <SwiperSlide><button className={activeIndex === 0 ? 'exampleActive' : ''} onClick={() => handleClick(0)}><img src={example1} className="example" /></button></SwiperSlide>
                                    <SwiperSlide><button className={activeIndex === 1 ? 'exampleActive' : ''} onClick={() => handleClick(1)}><img src={example2} className="example" /></button></SwiperSlide>
                                    <SwiperSlide><button className={activeIndex === 2 ? 'exampleActive' : ''} onClick={() => handleClick(2)}><img src={example3} className="example" /></button></SwiperSlide>
                                    <SwiperSlide><button className={activeIndex === 3 ? 'exampleActive' : ''} onClick={() => handleClick(3)}><img src={example4} className="example" /></button></SwiperSlide>
                                    <SwiperSlide><button className={activeIndex === 4 ? 'exampleActive' : ''} onClick={() => handleClick(4)}><img src={example5} className="example" /></button></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tema;