import { FC } from 'react';
import styles from './index.module.scss';
// For handle the side drawer

// Created the wrapper for the side drawer
const SideDrawerWrapper: FC = (props) => {
  // Inits
  const { children }: any = props;
  // JSX
  return (
    <>
      <div className={styles['side-drawer']}>
        <div className={styles['side-drawer__wrapper']}>{children}</div>
        <div className="side-drawer__backdrop"></div>
      </div>
    </>
  );
};

export default SideDrawerWrapper;
