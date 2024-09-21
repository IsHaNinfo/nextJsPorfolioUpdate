import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,

} from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { FaBloggerB } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                   <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    <CiLinkedin />
    <span className="text-[15px] ml-[6px]">LinkedIn</span>
  </p>
</a>

<a href="https://github.com/" target="_blank" rel="noopener noreferrer">
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    <RxGithubLogo />
    <span className="text-[15px] ml-[6px]">GitHub</span>
  </p>
</a>

<a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
  <p className="flex flex-row items-center my-[15px] cursor-pointer">
    <FaBloggerB />
    <span className="text-[15px] ml-[6px]">Blogger</span>
  </p>
</a>
                </div>
               
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Contact me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">+94 71 324 6556</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">ishaninfo56@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Ishan Dev 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer