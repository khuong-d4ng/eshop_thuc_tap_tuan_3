import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

const BannerCarousel = () => {
  const navigate = useNavigate();

  // Handler for clicking the banner text
  const handleBannerClick = () => {
    navigate('/login');
  };

  return (
    <div className="w-full relative">
      {/* quảng cáo hihi */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div
          className="flex flex-col items-center cursor-pointer pointer-events-auto px-8 py-6 rounded-lg"
          onClick={handleBannerClick}
          tabIndex={0}
          role="button"
          aria-label="Go to login"
        >
          <h1 className="text-white text-6xl font-bold drop-shadow-lg select-none">JOIN US THIS SUMMER</h1>
          <p className="text-white text-xl mt-4 drop-shadow-md select-none">
            Get a deal in this summer up to 30% discount
          </p>
        </div>
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