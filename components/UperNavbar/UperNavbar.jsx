import Image from "next/image"
import logo from "./Layer 2.png"
import search from './search_black_24dp.png'
import downArrow from "./previous.png";
const UperNavbar = () => {
  return (
    <div className='h-[73px]'>
        <div className="container mx-auto h-full">
            <div className="flex items-center justify-between h-full">
                <div>
                    <Image src={logo} width={109} height={34} alt="logo"/>
                </div>
                <div className="flex items-center w-[868px] h-[45px]">
                    <div className="flex items-center justify-center cursor-pointer rounded-[5px] h-[45px] w-[64px] bg-mainBg">
                        <Image src={search} height={24} width={24} alt="search" />
                    </div>
                    <input type="text" style={{background: "rgba(210, 6, 83, 0.1)"}} className=" h-full flex-1 px-4 text-right placeholder:text-customGray" placeholder="أبحث هنا"/>
                    <div style={{background: "rgba(210, 6, 83, 0.1)", borderLeft: "1px solid #fff"}} className="flex pl-4 pr-2 h-full gap-3 items-center justify-between"><div><Image src={downArrow} width="10" height="10" alt="arrow"/></div><div className="text-customPink">مزاد مباشر متعدد </div>
                    {/* <div className="none flex-col ">
                        <div>مزاد مباشر</div>
                        <div>مزاد عام</div>
                        <div>أسم البائع</div>
                        <div>مزاد مباشر متعدد</div>
                        <div>مزاد عام متعدد</div>
                        <div>رقم المنتج</div>
                    </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UperNavbar