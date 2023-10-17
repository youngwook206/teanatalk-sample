import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Slide } from 'pure-react-carousel';
import CarouselSlider from 'components/atoms/TemplateCarouselSlider';
import '../../style.scss';
/**
 * CardDefault
 */
const CardDefault = ({ boxStyle, item, viewType }) => {
  const { items } = item;
  const slideBoxSet = boxStyle;
  const slideBoxSetStyle = {
    width: `${slideBoxSet.width}px`,
    height: slideBoxSet.height,
    marginRight: `${slideBoxSet.margin}px`,
  };
  const slideLength = items.length;
  const constentSet = () => {
    return (
      <>
        {items.map((tempItem, idx) => {
          const tempImage = tempItem.image.image;
          return (
            <Slide key={`slide_${idx}`} className="_carousel_default" style={slideBoxSetStyle}>
              <div className="_cont_image">
                <div className="_image_box">
                  <img src={tempItem.image.image} alt={tempItem.image.alt} />
                </div>
              </div>
              <div className="_desc">
                <div className="_desc_box">
                  <div className="_label">
                    <div className="_label_tit" title="">
                      {tempItem.textbox.title}
                    </div>
                    <div className="_label_sub_tit" title="">
                      {tempItem.textbox.desc}
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="link_div">
                <div className="_link_box">상세보기</div>
              </div> */}
            </Slide>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="_carousel_button_div">
        <CarouselSlider slideBoxSet={slideBoxSet} contentCount={slideLength} contentSet={constentSet} />
      </div>
    </>
  );
};
CardDefault.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
CardDefault.defaultProps = {
  boxStyle: { width: 150, margin: 10, height: '220px' },
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default CardDefault;
