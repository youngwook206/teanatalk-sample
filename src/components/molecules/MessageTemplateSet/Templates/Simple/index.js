import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import '../../style.scss';
/**
 * Simple
 */
const Simple = ({ boxStyle, item, viewType }) => {
  return (
    <div className="_text_div">
      <div className="_message">{ReactHtmlParser(item.text || '')}</div>
    </div>
  );
};
Simple.propTypes = {
  boxStyle: PropTypes.object,
  item: PropTypes.object,
  viewType: PropTypes.string,
};
Simple.defaultProps = {
  boxStyle: {},
  item: {},
  viewType: 'advise', // advise, simulator, knowledge
};

export default Simple;
