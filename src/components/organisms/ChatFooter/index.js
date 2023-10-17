import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { chatList } from 'modules/actions/chat';
import IconButton from 'components/atoms/Button/IconButton';
import './style.scss';
/**
 * Chatting:Footer
 */
const ChatFooter = ({ title }) => {
  /** 입력창 Ref */
  const inputTextRef = useRef(null);
  const dispatch = useDispatch();

  const handleInput = () => {
    // const value = inputTextRef?.current?.value;
    // handleThrottle(value ? 'start' : 'end');
  };
  const onKeyPressEvt = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      onSendMessage();
    }
  };
  const onSendMessage = () => {
    const value = inputTextRef?.current?.value;
    const paramSet = {
      inType: 'query',
      inStr: value,
    };
    dispatch(chatList(paramSet));
  };
  return (
    <footer className="_chat_footer">
      <div className="_menu_btn">
        <IconButton
          icon="ri-apps-2-line"
          styleDef={{ borderRadius: '40px', border: '0px', backgroundColor: '#fff', color: '#888', fontSize: '20px' }}
          viewStatus=""
        />
      </div>
      <div className="_send_div">
        <div className="_send_box">
          <input
            type="text"
            placeholder="질문을 입력해 주세요"
            ref={inputTextRef}
            onKeyPress={onKeyPressEvt}
            onInput={handleInput}
            className="_send_box_input"
          />
          <div className="_icon_set">
            {/* 전송버튼 */}
            <IconButton
              icon="ri-send-plane-2-line"
              styleDef={{ borderRadius: '40px', border: '0px', backgroundColor: '#2E81F8', color: '#fff', paddingLeft: '3px', fontSize: '15px' }}
              viewStatus=""
              clickEvt={onSendMessage}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

ChatFooter.propTypes = {
  title: PropTypes.string,
};
ChatFooter.defaultProps = {
  title: '',
};
export default ChatFooter;
