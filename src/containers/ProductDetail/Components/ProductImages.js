import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductImages({ images }) {
    const productImages = images.data.productImages;
    const [mainSliderIndex, setMainSliderIndex] = useState(0);
    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const mainSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: slider2.current,
        beforeChange: (current, next) => setMainSliderIndex(next),
    };

    const thumbnailSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: slider1.current,
    };

    return (
        <div className="col-12 col-md-6">
            <div className="single_product_thumb">
                <Slider {...mainSliderSettings} className="main-slider" ref={slider1}>
                    {productImages.map((image, index) => (
                        <div key={index} className="slick-item">
                            <a className="gallery_img" href='#'>
                                <img style={{ width: '100%', height: '700px' }} className="d-block w-100" src={image.image_path} alt={`Slide ${index + 1}`} />
                            </a>
                        </div>
                    ))}
                </Slider>
                {productImages.length > 1 && (
                    <Slider {...thumbnailSliderSettings} className="thumbnail-slider" style={{ width: '100%', height: '100px' }} ref={slider2}>
                        {productImages.map((image, index) => (
                            <div key={index} className={`slick-item ${index === mainSliderIndex ? 'active' : ''}`}>
                                <img style={{ padding: '10px', width: '95%', height: '200px' }} className="d-block w-100" src={image.image_path} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
}

export default ProductImages;
