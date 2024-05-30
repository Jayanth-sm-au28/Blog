import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CarouselCardProps {
  data: {
    CardleftHeader: string;
    leftHeaderDescription: string;
    divider: boolean;
    leftDescripition: string;
    rightHeaderDescripition: string;
    rightFooterHeader: string;
    rightFooterDescripition: string;
    ButtonText: string;
    ButtonLink: string;
    ButtonIcon: string;
  };
}

const CarouselCard: React.FC<CarouselCardProps> = ({ data }) => {
  return (
    <div className="flex lg:flex-row mt-20 flex-col lg:gap-20 gap-6 md:p-10 justify-between items-start bg-white p-4 rounded-md">
      <div className="flex flex-col gap-4 basis-1/2">
        <div className="flex flex-col gap-3">
          <h2 className="lg:text-7xl text-5xl text-primary font-semibold text-[#6938Ef]">
            {data?.CardleftHeader}
          </h2>
          <h3 className="text-2xl font-semibold border-b pb-4 md:text-2xl border-[#4A1FB8] text-left">
            {data?.leftHeaderDescription}
          </h3>
        </div>
        {data.divider && <div className="h-[1px] w-full bg-primary"></div>}
        <div className="flex flex-col gap-4">
          <p className="text-gray-800 font-medium md:text-xl">
            {data?.leftDescripition}
          </p>
          <Link
            href={`/${data?.ButtonLink}`}
            className="link -translate-y-4 cta-learnmore flex flex-row gap-2 items-center rounded-md h-[3rem] duration-100 transition-all w-fit text-primary text-[#4A1FB8] font-semibold "
          >
            {data.ButtonText}
            <Image
              alt="right-arrow"
              loading="lazy"
              width="20"
              height="20"
              decoding="async"
              src={data?.ButtonIcon}
              style={{ transition: "transform 0.3s ease" }}
              className="button-icon"
            />
          </Link>
        </div>
      </div>
      <div className="md:bg-primary bg-[#4A1FB8] rounded-xl p-8 flex flex-col justify-between items-start text-start gap-24 basis-2/3">
        <p className=" text-white md:text-xl font-normal">
          {data.rightHeaderDescripition}
        </p>
        <div className="flex flex-col gap-1 items-start justify-start text-start">
          <p className="p2 text-white ">{data.rightFooterHeader}</p>
          <p className="p2 text-white ">{data.rightFooterDescripition}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
