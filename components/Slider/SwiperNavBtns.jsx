import { useSwiper } from "swiper/react"
import Image from "next/image";
import upArrow from "./Group 541.png"

const SwiperNavBtns = () => {
    const swiper = useSwiper();
  return (
    <div className="swiper-nav-btns">
        <button id='nextSlide' onClick={()=>swiper.slideNext()}>
        <Image src={upArrow}  width={78} height={78} alt="arrow" className="custom-next mt-[-30px] cursor-pointer absolute right-[-78px] top-[200px] rotate-90"/>
        </button>
        <button id="prevSlide" onClick={()=>swiper.slidePrev()} >
        <Image src={upArrow} width={78} height={78} alt="arrow" className="custom-next mt-[-30px] cursor-pointer absolute right-[-78px] top-[200px] rotate-90"/>
        </button>
    </div>
  )
}

export default SwiperNavBtns