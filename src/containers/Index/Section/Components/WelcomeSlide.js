import React, { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideService from '../../../../services/slideService';
const WelcomeSlide = () => {
  const [slides, setSlides] = useState([]);
  console.log('check slide: ',slides);
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
  useEffect(() => {
    slideService.getSlideFromAPI().then((response)=>{
      setSlides(response.slideData);
      
    }).catch((error)=>{
      console.log('error: ',error);
    });
  }, []);
  return (
    <section className="welcome_area">
      <Slider {...carouselSettings}>
      {slides && slides.map((slide, index) => (
          <div key={index}
          className="single_slide height-800 bg-img background-overlay"
          style={{ position: 'relative' }}
        >
          <img
            src={slide.image_path}
            alt={slide.title}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              zIndex: 1, 
            }}
          />
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome_slide_text">
                    <h6
                      data-animation="fadeInDown"
                      data-delay="0"
                      data-duration="500ms"
                    >
                      {slide.title}
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
