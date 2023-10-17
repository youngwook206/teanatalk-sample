import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../style.scss';
/**
 * Image
 */
const Image = ({ boxStyle, item, viewType }) => {
  const { items, type } = item;
  return (
    <>
      <div className="_image_div">
        {items.map((tempItem, idx) => {
          return (
            <div key={`${type}_${idx}`} className="_box">
              <div className="_image_box">
                <img src={tempItem[type].image} alt={tempItem[type].alt} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
Image.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
Image.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default Image;
