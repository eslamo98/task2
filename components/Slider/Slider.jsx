"use client";

import { Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image"
import upArrow from "./Group 541.png"
import downArrow from "./Group 2553.png"
import car1 from "./car1.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SwiperNavBtns from './SwiperNavBtns';




const Slider = () => {
    
    const handlePrev = () => {
        const prevBtn = document.getElementById("prevSlide");
        prevBtn.click();
    }

    const handleNext = () => {
        const nextBtn = document.getElementById("nextSlide");
        nextBtn.click();
    }
  return (
    <div style={{transform: "rotateZ(90deg)",position: "absolute", right: "-82px", top: "200px"}} className=" text-center custom-slider max-w-[414px] h-[78px] absolute top-[200px] right-[-78px] mt-12">
        <Image src={downArrow} onClick={handleNext} width={78} height={78} alt="arrow" className="custom-next mt-[-15px] cursor-pointer"/>

            <Swiper 
            modules={[Navigation]}
            spaceBetween={6}
            slidesPerView={5}
            navigation
            pagination={{ clickable: true }}
            >
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                <SwiperSlide style={{transform: "rotate(-90deg)", width: "78px", height: "78px", overflow: "hidden"}} className="h-[78px] rounded-[4px] overflow-hidden flex items-center object-cover">
                    <Image src={car1} width={78} height={78} alt="car1" className="object-cover rounded-[4px]"/>
                </SwiperSlide>
                
                <SwiperNavBtns />
            </Swiper>
        <Image src={downArrow}  onClick={handlePrev} width={78} height={78} alt="arrow" className="custom-prev mt-[-15px] cursor-pointer"/>

    </div>
  )
}

export default Slider