import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../style.scss';
/**
 * Text
 */
const Text = ({ boxStyle, item, viewType }) => {
  const { items, type } = item;
  return (
    <>
      {items.map((tempItem, idx) => {
        return (
          <div key={`${type}_${idx}`} className="_text_div">
            <div className="_message">{ReactHtmlParser(tempItem[type]?.desc || '')}</div>
          </div>
        );
      })}
    </>
  );
};
Text.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
Text.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default Text;
