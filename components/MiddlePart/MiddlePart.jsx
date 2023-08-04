"use client";

import Image from "next/image"
import person4 from "./person4.jpg"
import mainPic from "./mainpic.jpg"
import share from "./share_black_24dp.png"
import heart from "./noun_Love_1033573.png"
import flage from "./flag_black_24dp.png"
import eye from "./noun_show_3052148.png"
import filledStar from "./Group 1337.png"
import emptyStar from "./Group 1338.png"
import send from "./Group 5452.png"
import live from "./animation_lkwqsfau_small.gif"
import Slider from "../Slider/Slider";

const MiddlePart = () => {
  return (
    <div className='mt-12 ml-4 mr-[5px] '>
        <div className='relative shadow-secondaryShadow rounded-[4px]'>
            <div className='w-[751px] h-[379px] relative rounded-[4px] overflow-hidden'>
                <Image src={mainPic} fill={true} alt="main pic" className="absolute top-0 left-0 w-full h-full z-[-1]" />
                <div className="absolute top-[18px] pl-[15px] flex justify-between items-center w-full pr-[15px] h-[48px]">
                    <div className="flex items-center gap-3">
                        <div style={{backgroundColor: "rgba(0,0,0,0.42)"}} className="w-[48px] h-[48px] rounded-[50%] flex items-center justify-center brightness-[15px] blur-[5px]">
                            <Image src={share} width={20} height={20} alt="share" />
                        </div>
                        <div style={{backgroundColor: "rgba(0,0,0,0.42)"}} className="w-[48px] h-[48px] rounded-[50%] flex items-center justify-center brightness-[15px] blur-[5px]">
                            <Image src={heart} width={16} height={16} alt="share" />
                        </div>
                        <div style={{backgroundColor: "rgba(0,0,0,0.42)"}} className="w-[48px] h-[48px] rounded-[50%] flex items-center justify-center brightness-[15px] blur-[5px]">
                            <Image src={flage} width={20} height={20} alt="share" />
                        </div>
                    </div>
                    <div style={{backgroundColor: "rgba(0,0,0,0.2)"}} className="flex items-center overflow-hidden text-[10px] font-thin text-white ml-auto blur-[10px] brightness-[15px] rounded-[4px] h-[32px] w-[178px]">
                        <div className="flex px-2 gap-[5px] items-center justify-center"><span>3000</span><span><Image src={eye} height={14} width={16} alt="eye"/></span></div>
                        <div style={{borderLeft: "1px solid #ddd"}} className="px-2"><span>02:00</span></div>
                        <div className="flex-1 bg-white h-full w-full">
                        <Image src={live} width={110} height={110} alt="live stream icon" className="mt-[-10px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[751px] h-[179px]">
                <div className="p-[10px]">
                <div className="flex items-center justify-end mb-[11px]">
                    <div className="flex gap-2">
                        <div className="flex flex-col gap-[2px] items-end">
                            <div className="flex items-center gap-5">
                            <span className=" flex items-center justify-center text-[22px] font-bold rounded-[4px] text-[#FDBC01]">
                                <Image src={filledStar} width={15} height={15} alt="star" />
                                <Image src={filledStar} width={15} height={15} alt="star" />
                                <Image src={filledStar} width={15} height={15} alt="star" />
                                <Image src={filledStar} width={15} height={15} alt="star" />
                                <Image src={emptyStar} width={15} height={15} alt="star" />
                            </span>
                            <span className="font-bold text-[14px]">اسم البائع</span> 
                            </div>
                            <span className="text-[#808080] font-thin text-[12px]">+966598398</span>
                        </div>
                        <div className="rounded-[50%] relative overflow-hidden w-[44px] h-[44px] object-cover object-center">
                            <Image src={person4} fill={true} className="object-cover object-center" alt="person1" />
                        </div>
                    </div>
                </div>
                <div className="text-right mb-3">
                    <p className="font-bold text-[20px]">شراء مجموعة من السيارات من موديلات1990</p>
                    <span className="font-thin text-[#808080] text-[12px]">code 1234</span>
                </div>
                <div className="flex items-center justify-between mx-[21px] mb-[14px]">
                    <div className="flex items-center gap-3">
                        <button className="w-[88px] h-[38px] bg-gradient-to-r from-[#9B0257] to-[#D20653] text-white">تاكيد</button>
                        <input type="text" className="w-[175px] h-[38px] border border-[1px solid #CCCCCC] text-right p-2 placeholder:text-[#CCCCCC]" placeholder="أكتب المبلغ"/>
                    </div>
                    <div className="flex items-center gap-[6px]">
                    <span style={{background :"rgba(210, 6, 8 , 0.1"}} className="w-[72px] h-[38px] flex items-center justify-center text-[16px] rounded-[4px] text-[#D20653]"><span className="opacity-100">+10000</span></span>
                    <span style={{background :"rgba(210, 6, 8 , 0.1"}} className="w-[72px] h-[38px] flex items-center justify-center text-[16px] rounded-[4px] text-[#D20653]">+10010</span>
                    <span style={{background :"rgba(210, 6, 8 , 0.1"}} className="w-[72px] h-[38px] flex items-center justify-center text-[16px] rounded-[4px] text-[#D20653]">+10020</span>
                    </div>
                </div>
                </div>
            </div>

        </div>
            <div className=" flex flex-col items-end shadow-secondaryShadow rounded-[4px] mt-[34px] py-[14px] px-[21px] h-[134px] w-full">
                <div className="font-bold text-[20px]">ارسال رسالة الى البائع</div>
                <div className="font-light text-[#414141] mt-[6px] mb-[13px] text-[14px]">يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار</div>
                <div className="flex items-center w-full">
                    <button className="w-[44px] h-[44px] rounded-[50%] flex items-center justify-center overflow-hidden">
                        <Image src={send} width={44} height={44} alt="send"/>
                    </button>
                    <input type="text"  className="flex-1 flex-grow-5 border focus:border-[1px solid #E3E3E3] focus:outline-none bg-[#F3F3F3] border-[1px solid #E3E3E3] rounded-[19px] h-[38px] px-8 text-right text-[#" placeholder="اكتب سؤالك"/>
                </div>
            </div>
    </div>
  )
}

export default MiddlePart