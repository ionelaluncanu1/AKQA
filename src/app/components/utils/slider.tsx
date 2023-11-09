"use client";
// import data from "@/app/data.json";
import Image from "next/image";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  swipeToSlide: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function CommonSlider(props: any) {
  return (
    <Slider {...settings}>
      {props?.data.map((item: any) => {
        return (
          <a href="#" className="group pr-5 mt-6" key={item.id}>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                unoptimized
                alt="ml2"
                src={item.url}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={100}
                height={100}
              />
            </div>
            <p className="mt-4 text-base">{item.brand}</p>
            <p className="mt-1 text-base text-gray-200">{item.description}</p>
            <p className="mt-1 text-base text-gray-200">{item.colors}</p>
            <p className="mt-4 text-base">
              <span>{item.price} </span>
              <span className="line-through text-gray-200">
                {item.oldPrice}
              </span>
            </p>
          </a>
        );
      })}
    </Slider>
  );
}
