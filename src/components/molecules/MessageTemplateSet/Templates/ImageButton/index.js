import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../style.scss';
/**
 * ImageButton
 */
const ImageButton = ({ boxStyle, item, viewType }) => {
  const { items, type } = item;
  return (
    <>
      <div className="_image_buttons_div">
        {items.map((tempItem, idx) => {
          return (
            <div key={`${type}_${idx}`} className="_button" onClick={e => clickUrlEvt(tempItem[type].value)}>
              <div className="_image_box">
                <img src={tempItem[type].image} alt={tempItem[type].alt} />
              </div>
              <div className="_label">
                <div className="_txt">{tempItem[type].label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
ImageButton.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
ImageButton.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default ImageButton;
