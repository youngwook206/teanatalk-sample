import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/ChatHeader';
import Middle from 'components/organisms/ChatMiddle';
import Footer from 'components/organisms/ChatFooter';
import './style.scss';

const ChatTemplate = ({ messageSet }) => {
  return (
    <div className="frame_set">
      <div className="_container">
        <Header />
        <Middle messageSet={messageSet} />
        <Footer />
      </div>
    </div>
  );
};

ChatTemplate.propTypes = {
  messageSet: PropTypes.array,
};

ChatTemplate.defaultProps = {
  messageSet: [],
};
export default ChatTemplate;
