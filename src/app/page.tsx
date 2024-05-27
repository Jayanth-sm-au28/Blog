"use client";
import { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import CarouselCard from "@/components/CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CustomDot = ({ index, onClick, active }: any) => {
  return (
    <div
      onClick={onClick}
      className={`w-2.5 h-2.5 rounded-full cursor-pointer ${active ? 'bg-black' : 'bg-gray-300'}`}
    ></div>
  );
};

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  async function StrapiData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blog?populate[Home][populate]=*`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        }
      );
      const data = await response.json();
      // Assuming data structure
      const carouselCards = data.data.attributes.Home[0].ListOCard;
      setCarouselData(carouselCards);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    StrapiData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

  };


  return (
    <div>
      <NavBar />
      <div className="sm:p-2 md:p-6">
        <Slider {...settings} className="">
          {carouselData?.map((card: any) => (
            <CarouselCard key={card.id} data={card} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
