import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WelcomeSlide = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [
    {
      backgroundImage: 'url(images/bg-4.jpg)',
      title: 'Bùi Duy Khánh',
      subtitle: '* Only today we offer free shipping',
      buttonLabel: 'Shop Now',
      buttonAnimation: 'fadeInUp',
      buttonDelay: '1s',
      buttonDuration: '500ms',
    },
    {
      backgroundImage: 'url(img/bg-img/bg-4.jpg)',
      title: 'Nguyễn Phạm Huy Tuấn',
      subtitle: '* Only today we offer free shipping',
      buttonLabel: 'Check Collection',
      buttonAnimation: 'fadeInLeftBig',
      buttonDelay: '1s',
      buttonDuration: '500ms',
    },
    {
      backgroundImage: 'url(images/bg-4.jpg)',
      title: 'Nguyễn Minh Trí',
      subtitle: '* Nguyễn Minh Trí',
      buttonLabel: 'Check Collection',
      buttonAnimation: 'fadeInRightBig',
      buttonDelay: '1s',
      buttonDuration: '500ms',
    },
  ];

  return (
    <section className="welcome_area">
      <Slider {...carouselSettings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="single_slide height-800 bg-img background-overlay"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome_slide_text">
                    <h6
                      data-animation="fadeInDown"
                      data-delay="0"
                      data-duration="500ms"
                    >
                      {slide.subtitle}
                    </h6>
                    <h2
                      data-animation="fadeInUp"
                      data-delay="500ms"
                      data-duration="500ms"
                    >
                      {slide.title}
                    </h2>
                    <a
                      href="#"
                      className={`btn karl-btn ${slide.buttonAnimation}`}
                      data-animation={slide.buttonAnimation}
                      data-delay={slide.buttonDelay}
                      data-duration={slide.buttonDuration}
                    >
                      {slide.buttonLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default WelcomeSlide;
