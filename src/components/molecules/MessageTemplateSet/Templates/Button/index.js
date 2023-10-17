import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../style.scss';
/**
 * Text
 */
const Button = ({ boxStyle, item, viewType }) => {
  const { items, type } = item;
  return (
    <>
      <div className="_buttons_div">
        {items.map((tempItem, idx) => {
          return (
            <div key={`${type}_${idx}`} className="_button" onClick={e => clickUrlEvt(tempItem[type]?.value)}>
              {ReactHtmlParser(tempItem[type]?.label || '')}
            </div>
          );
        })}
      </div>
    </>
  );
};
Button.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
Button.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default Button;
