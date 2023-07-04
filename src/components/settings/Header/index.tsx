import { Image, Layout, Space } from 'antd';
import styles from './index.module.scss';
import { BellOutlined } from '@ant-design/icons';
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
          padding: '10px 40px',
        }}
      >
        <div className={styles.header__title}>
          <p>Dashboard</p>
        </div>
        <Space className={styles.header__details} size={20}>
          <BellOutlined style={{ fontSize: '18px' }} />
          <Image
            src="/assets/images/login.jpg"
            width={'40px'}
            preview={false}
            className={styles['header__details--userImage']}
          />
        </Space>
      </Header>
    </div>
  );
};
export default Header;
