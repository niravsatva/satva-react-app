import { Card, Switch } from 'antd';
import styles from './index.module.scss';

export default function PreferenceCard(props: any) {
  const { preference } = props;
  return (
    <Card
      title={preference?.title}
      className={styles.preferences__card}
      extra={<Switch defaultChecked={preference?.status} />}
    >
      <div className={styles.preferences__preference}>
        {preference?.preferences?.map((item: any) => (
          <div className={styles.preferences__card__button}>
            <Switch defaultChecked={item?.status} />
            <p>{item?.title}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
