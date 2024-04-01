import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carddesign from "./Carddesign";
import { FaLightbulb } from "react-icons/fa";
const cardData = [
  {
    name: "Raushan",
    amt: 500,
  },
  {
    name: "Raushan",
    amt: 500,
  },
  {
    name: "Raushan",
    amt: 500,
  },
  {
    name: "Raushan",
    amt: 500,
  },
];
function Scroll() {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: false,
          prevArrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="px-10 min-h-40 py-4">
      <div className="slider-container px-4 pr-0 py-8 items-center justify-center">
        <Slider {...settings}>
          {cardData.map((data, index) => (
            <Carddesign
              key={index}
              icon={<FaLightbulb/>}
              name={data.name}
              amt={data.amt}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Scroll;
