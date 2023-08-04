import Image from "next/image"
import prev from "./previous@2x.png"
import fav from "./favorite_black_24dp.png"
import notification from "./notifications_black_24dp.png"
import price from "./price_change_black_24dp.png"

const LowerNavbar = () => {
  return (
    <div className='h-[73px] bg-mainBg'>
        <div className="container mx-auto h-full">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center h-full gap-[22px]">
                    <button className="flex items-center justify-center gap-1 w-[80px] h-[27px] rounded-[20px] bg-[#FF951D] text-white">
                        <span><Image src={prev} width={15} height={9} alt="prev"/></span><span>عربية</span>
                    </button>
                    <span><Image src={fav} width={24} height={24} alt="Favourite"/></span>
                    <span><Image src={notification} width={24} height={24} alt="notification"/></span>
                    <span><Image src={price} width={24} height={24} alt="price"/></span>
                </div>
                <div className="flex items-center h-full gap-[22px] text-white">
                    <span className="cursor-pointer duration-200 hover:text-customGray">حسابي</span>
                    <span className="cursor-pointer duration-200 hover:text-customGray">مشترياتي</span>
                    <span className="cursor-pointer duration-200 hover:text-customGray">التصنيفات</span>
                    <span className="cursor-pointer duration-200 ">الرئيسية</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LowerNavbar