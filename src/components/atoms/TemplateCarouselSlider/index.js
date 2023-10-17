import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './style.scss';
/**
 * Slider
 */
const TemplateCarouselSlider = ({ boxStyle, slideBoxSet, contentSet, contentCount }) => {
  const items = [];
  // set
  const [visibleSlides, setVisibleSlides] = useState(1);
  const slideBoxSize = slideBoxSet.width + slideBoxSet.margin;

  const messageBoxDef = useRef(0);
  useLayoutEffect(() => {
    let clientWidth = messageBoxDef.current.clientWidth;
    setVisibleSlides(clientWidth / slideBoxSize);

    function handleResize(a) {
      clientWidth = messageBoxDef.current.clientWidth;
      setVisibleSlides(clientWidth / slideBoxSize);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="_carousel_div" ref={messageBoxDef}>
      <CarouselProvider visibleSlides={visibleSlides} className="_message_temp_carousel_div" totalSlides={contentCount}>
        <Slider>{contentSet()}</Slider>
        <ButtonBack className="_back_button">
          <i className="ri-arrow-left-circle-line" />
        </ButtonBack>
        <ButtonNext className="_next_button">
          <i className="ri-arrow-right-circle-line" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

TemplateCarouselSlider.propTypes = {
  boxStyle: PropTypes.object,
  slideBoxSet: PropTypes.object,
  contentCount: PropTypes.number,
  contentSet: PropTypes.func,
};
TemplateCarouselSlider.defaultProps = {
  boxStyle: {},
  slideBoxSet: { width: 300, margin: 15, height: '200px' },
  contentCount: 0,
  contentSet: () => {},
};

export default TemplateCarouselSlider;
