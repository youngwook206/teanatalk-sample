import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import MessageDiv from 'components/molecules/MessageDiv';
import './style.scss';
/**
 * Chatting:Middle
 */
const ChatMiddle = ({ messageSet }) => {
  const messageBoxRef = useRef(0);
  return (
    <section className="_chat_middle">
      <div className="_message_div">
        <div className="_message_layout scroll_style_messenger" id="scrollToElement" ref={messageBoxRef}>
          {messageSet.map((item, idx) => {
            return <MessageDiv key={item.messageId} message={item} index={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

ChatMiddle.propTypes = {
  messageSet: PropTypes.array,
};
ChatMiddle.defaultProps = {
  messageSet: [],
};
export default ChatMiddle;
