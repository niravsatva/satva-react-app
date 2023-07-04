import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import React from 'react';
import styles from './index.module.scss';

// Creating a sidebar for the settings page
const Sidebar = () => {
  // Inits
  const { Sider } = Layout;

  // Dummy menu items
  const items2: MenuProps['items'] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(7).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });

  // JSX
  return (
    <Sider
      style={{
        background: '#ddd',
        maxHeight: '100%',
        height: '100%',
        overflow: 'scroll',
      }}
      className={styles.sidebar}
    >
      <div className={styles.sidebar__wrapper}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ borderRight: 0, background: '#ddd' }}
          items={items2}
        />
        <div className={styles.sidebar__support}>
          <Button
            type="primary"
            ghost={true}
            className={styles['sidebar__support--button']}
          >
            Get Support
          </Button>
        </div>
      </div>
    </Sider>
  );
};

export default Sidebar;
