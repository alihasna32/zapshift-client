import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";   
import { CircleArrowOutUpRight } from "lucide-react";
export const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="flex justify-center items-center absolute bottom-10 left-17">
            <button className="btn bg-primary rounded-2xl">Track Your Parcel</button>
            <CircleArrowOutUpRight></CircleArrowOutUpRight>
            <button className="border border-gray-400 rounded-2xl p-1 ml-3.5">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg2} />
        <div className="flex justify-center items-center absolute bottom-10 left-17">
            <button className="btn bg-primary rounded-2xl">Track Your Parcel</button>
            <CircleArrowOutUpRight></CircleArrowOutUpRight>
            <button className="border border-gray-400 rounded-2xl p-1 ml-3.5">Be A Rider</button>
        </div>
      </div>
      <div className="relative">
        <img src={bannerImg3} />
        <div className="flex justify-center items-center absolute bottom-10 left-17">
            <button className="btn bg-primary rounded-2xl">Track Your Parcel</button>
            <CircleArrowOutUpRight></CircleArrowOutUpRight>
            <button className="border border-gray-400 rounded-2xl p-1 ml-3.5">Be A Rider</button>
        </div>
      </div>
      
    </Carousel>
  );
};
