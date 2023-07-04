import { FC, useEffect } from 'react';
import styles from './index.module.scss';
import { SideDrawerProps } from './types';
import { CloseOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
// For handle the side drawer

// Created the wrapper for the side drawer
const SideDrawerWrapper: FC<SideDrawerProps> = (props) => {
  // Inits
  const { children, isOpen, closeDrawerByAnimation, removeDrawerFromDom } =
    props;
  //for handle the key press of keyboard
  const keyPressHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeDrawerByAnimation();
    }
  };

  // use effect for the close the on the sideDrawer on the esc button click
  useEffect(() => {
    window.addEventListener('keydown', keyPressHandler);
    return () => window.removeEventListener('keydown', keyPressHandler);
  });
  // JSX
  return (
    <>
      <div
        className={`${styles['side-drawer']} ${
          isOpen ? styles['slide-in'] : styles['slide-out']
        }`}
        onAnimationEnd={() => {
          !isOpen && removeDrawerFromDom();
        }}
      >
        <Row
          className={styles['side-drawer__header']}
          justify={'space-between'}
          align={'middle'}
        >
          <Col>
            <h4 className={styles['side-drawer__header--heading']}>
              ADD Something
            </h4>
          </Col>
          <Col>
            <CloseOutlined
              className={styles['side-drawer__header--close-icon']}
              onClick={() => closeDrawerByAnimation()}
            />
          </Col>
        </Row>
        <div className={styles['side-drawer__body']}>{children}</div>
      </div>
      <div
        className={styles['side-drawer__backdrop']}
        onClick={closeDrawerByAnimation}
      />
    </>
  );
};

export default SideDrawerWrapper;
