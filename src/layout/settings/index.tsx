import { Header, Sidebar } from 'components/settings';
import { Layout } from 'antd';
import styles from './index.module.scss';
// General layout for settings page
const Settings = (props: any) => {
  // Inits
  const { children }: any = props;
  // JSX
  return (
    <>
      <Header />
      <Layout hasSider={true} className={styles.layout}>
        <div className={styles.layout__sidebar}>
          <Sidebar />
        </div>
        <div className={styles.layout__body}>{children}</div>
      </Layout>
    </>
  );
};

export default Settings;
