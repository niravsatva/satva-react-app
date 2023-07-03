import { PlusOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { Typography, Button, Grid, Row, Col } from 'antd';

// For do something to table section
const AddInfo = () => {
  // Inits
  const { Title } = Typography;
  // JSX
  return (
    <div className={styles['add-info']}>
      <Row
        className={styles['add-info__wrapper']}
        justify={'space-between'}
        align={'middle'}
      >
        <Col>
          <h3>Hello</h3>
        </Col>
        <Col>
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Add something
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddInfo;
