import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'components/atoms/Button/IconButton';
import './style.scss';
/**
 * Chatting:Header
 */
const ChatHeader = ({ title, viewType }) => {
  // 채팅창 닫기
  const eventClickBackMain = () => {
    console.log(5555);
  };
  return (
    <header className="_chat_header">
      <div className="_left_div">
        <IconButton styleDef={{ borderRadius: '0px' }} viewStatus="" />
      </div>
      <div className="_center_div">
        <div className="_logo">
          <img src="/images/chatman.svg" alt="logo" />
        </div>
        <div className="_title">
          <p>BRICK</p>
          <span>Chat-bot</span>
        </div>
      </div>
      <div className="_right_div">
        <IconButton styleDef={{ borderRadius: '50px' }} viewStatus="" />
      </div>
    </header>
  );
};

ChatHeader.propTypes = {
  title: PropTypes.string,
  viewType: PropTypes.string,
};
ChatHeader.defaultProps = {
  title: '',
  viewType: '',
};
export default ChatHeader;
