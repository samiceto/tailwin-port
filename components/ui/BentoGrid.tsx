"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import  animationData  from "@/data/Confetti.json"
import { Magicbutton } from "./Magicbutton";
import { FaLocationArrow } from "react-icons/fa6";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
 

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number,
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImg?:string;

}) => {
    const[copied,setcopied]=useState(false);
    const handleCopy=()=>{
        navigator.clipboard.writeText('samiullahmalik7474@gmail.com');

        setcopied(true);
    }
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-3xl group/bento hover:shadow-2xl hover:translate-x-1 transition duration-200 shadow-input dark:shadow-none  justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "lenear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
            <div className="w-full h-full absolute">
                {img && ( 
                    <img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'ibject-cover,object-center')}
                    />
                )}
            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                {spareImg && (
                    <img
                    src={spareImg}
                    alt={spareImg}
                    className={'object-cover, object-center w-full h-full'}
                    />
                )}
            </div>
            {id === 6 && (
                <BackgroundGradientAnimation>
                    <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
                </BackgroundGradientAnimation>
            )}
            <div className={cn(
                titleClassName, 'group-hover/ bento:translate-x-2 transition duration-200 relative md:h-full min:h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                <div className="font-sans font-extralight text-[#clc2d3] text-sm md:tex-xs lg:text-base z-10">
                    {description}
                </div>
                <div className="font-sans font-bold text-lg lg:tex-3xl max-w-96 z-10">
          {title}
        </div>
            
            {id === 2 && <GlobeDemo />}
            {id === 3 && (
                <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                    <div className="flex flex-col gap-3 lg:gap-2">
                        {['React','Next','Typescript'].map((item)=>(
                            <span key={item} className="py-2 lg:py-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                {item}
                            </span>
                        ))}
                        <span className="py-4 rounded-lg text-center bg-[#10132e]" />
                    </div>
                    <div className="h-full flex flex-col gap-1 lg:gap-2">
                    <span className="py-4 rounded-lg text-center bg-[#10132e]" />
                        {['Photoshop','Html','Css'].map((item)=>(
                            <span key={item} className="py-2 lg:py-3 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                {item}
                            </span>
                        ))}
                        
                    </div>
                </div>
            )}

            {id === 6 && (
                <div className="mt-5 relative">
                    <div className={`absolute -bottom-5 right-0`}>

                        <Lottie options={{
                            loop:copied,
                            autoplay:copied,
                            animationData,
                            rendererSettings:{
                                preserveAspectRatio: 'xMidYMid slice',
                            }
                        }} />
                    </div>
                    <Magicbutton 
                    title={copied? 'Email Copied' :'Copy My Email'}
                    icon={< FaLocationArrow />}
                    possition="left"
                    otherclasses="!bg-[#161a31]"
                    handleclick={handleCopy}
                    />
                </div>
            )}
        </div>
    </div>
    </div>
  );
};