import Image from "next/image"
import person1 from "./person1.jpg"
import person2 from "./person2.jpg"
import person3 from "./person3.jpg"
import person4 from "./person4.jpg"
import person5 from "./person5.jpg"

const Sidebar = () => {
  return (
    <div className='mr-4 pt-12'>
        <div className="flex-col">
            <div className="mb-[35px] shadow-customShadow py-[21px] px-[14px] rounded-[4px]">
                <div className='bg-[#414141] text-white flex justify-between mb-[7px] items-center w-[295px] h-[40px] py-[9px] px-[14px] rounded-[4px]'>
                    <span className='font-bold'>22-12022</span>
                    <span className='text-[12px]'>تاريخ البث</span>
                </div>
                <div className="flex gap-[6px]">
                    <div className='flex flex-col justify-center items-center rounded-[4px] bg-[#E3E3E3] text-[#44215D] w-[145px] h-[76px]'>
                        <div className=' text-[12px]'>القيمة الحالية بعد الضريبة </div>
                        <div className='flex items-center gap-[5px]'><span className='text-[15px]'>$</span><span className='font-bold text-[24px]'>5050</span></div>
                    </div>
                    <div className='flex flex-col justify-center items-center rounded-[4px] bg-[#44215D] text-white w-[145px] h-[76px]'>
                        <div className=' text-[12px]'>القيمة الحالية للمزاد</div>
                        <div className='flex items-center gap-[5px]'><span className='text-[15px]'>$</span><span className='font-bold text-[24px]'>5000</span></div>
                    </div>
                </div>
            </div>
            <div className="mb-[23px] shadow-customShadow py-[21px] px-[14px] rounded-[4px] text-right">
                <span className="text-[#1D1D1D] font-bold text-[20px] mb-3">المتنافسون</span>
                <div className="flex items-center justify-between mb-3 mt-3">
                    <span className="w-[55px] h-[32px] bg-[#fdbc0129] flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">+20</span>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-center">
                            <span className="font-bold text-[14px]">اسم المزايد</span> 
                            <span className="text-[#808080] font-light text-[12px]">13:59:00</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] object-cover object-center">
                            <Image src={person2} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <span className="w-[55px] h-[32px] bg-[#fdbc0129] flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">+20</span>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-center">
                            <span className="font-bold text-[14px]">اسم المزايد</span> 
                            <span className="text-[#808080] font-light text-[12px]">13:59:00</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] object-cover object-center">
                            <Image src={person4} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <span className="w-[55px] h-[32px] bg-[#fdbc0129] flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">+20</span>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-center">
                            <span className="font-bold text-[14px]">اسم المزايد</span> 
                            <span className="text-[#808080] font-light text-[12px]">13:59:00</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] ">
                            <Image src={person1} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <span className="w-[55px] h-[32px] bg-[#fdbc0129] flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">+20</span>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-center">
                            <span className="font-bold text-[14px]">اسم المزايد</span> 
                            <span className="text-[#808080] font-light text-[12px]">13:59:00</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] object-cover object-center">
                            <Image src={person5} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                    <span className="w-[55px] h-[32px] bg-[#fdbc0129] flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">+20</span>
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-center">
                            <span className="font-bold text-[14px]">اسم المزايد</span> 
                            <span className="text-[#808080] font-light text-[12px]">13:59:00</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] object-cover object-center">
                            <Image src={person3} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>
                
            </div>

            <div className=" shadow-customShadow py-[21px] px-[14px] rounded-[4px]">
                <div className="flex flex-col items-center gap-[11px]">
                    <div className="w-[296px] h-[43px] rounded-[4px] flex items-center justify-between bg-[#F3F3F3]">
                        <span className="my-[5px] mx-3 text-[#707070] font-bold text-[24px]">5000</span>
                        <span className="my-3 mx-[9px] font-thin text-[12px]">القيمة الابتدائية</span>
                    </div>
                    <div className="w-[296px] h-[43px] rounded-[4px] flex items-center justify-between bg-[#F3F3F3]">
                        <span className="my-[5px] mx-3 text-[#707070] font-bold text-[24px]">5000</span>
                        <span className="my-3 mx-[9px] font-thin text-[12px]">القيمة الابتدائية</span>
                    </div>
                    <div className="w-[296px] h-[43px] rounded-[4px] flex items-center justify-between bg-[#F3F3F3]">
                        <span className="my-[5px] mx-3 text-[#707070] font-bold text-[24px]">5000</span>
                        <span className="my-3 mx-[9px] font-thin text-[12px]">القيمة الابتدائية</span>
                    </div>
                    <div className="w-[296px] h-[43px] rounded-[4px] flex items-center justify-between bg-[#F3F3F3]">
                        <span className="my-[5px] mx-3 text-[#707070] font-bold text-[24px]">5000</span>
                        <span className="my-3 mx-[9px] font-thin text-[12px]">القيمة الابتدائية</span>
                    </div>
                    <div className="w-[296px] h-[43px] rounded-[4px] flex items-center justify-between bg-[#F3F3F3]">
                        <span className="my-[5px] mx-3 text-[#707070] font-bold text-[24px]">5000</span>
                        <span className="my-3 mx-[9px] font-thin text-[12px]">القيمة الابتدائية</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar