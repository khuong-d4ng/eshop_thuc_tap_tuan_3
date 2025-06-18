import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  return (
    <div className="w-full relative">
      {/* quảng cáo hihi */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <h1 className="text-white text-6xl font-bold drop-shadow-lg select-none">JOIN US THIS SUMMER</h1>
        <p className="text-white text-xl mt-4 drop-shadow-md select-none">
          Get a deal in this summer up to 30% discount
        </p>
      </div>
      {/* Banner Carousel */}
      <div className="w-full h-[500px]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          stopOnHover={false}
        >
          <div className="h-[500px]">
            <img
              src="images/products/11.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[500px]">
            <img
              src="images/products/12.jpg"
              alt="Banner 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[500px]">
            <img
              src="images/products/13.jpg"
              alt="Banner 3"
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BannerCarousel;