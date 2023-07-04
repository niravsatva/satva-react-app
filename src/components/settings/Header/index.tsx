import { Layout } from 'antd';
import styles from './index.module.scss';

// Creating the header for the settings page
const Header = () => {
  // Inits
  const { Header } = Layout;
  // JSX
  return (
    <div className={styles.header}>
      <Header
        style={{
          background: '#eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
        }}
      >
        <p className={styles.header__title}>Dashboard</p>
      </Header>
    </div>
  );
};
export default Header;
