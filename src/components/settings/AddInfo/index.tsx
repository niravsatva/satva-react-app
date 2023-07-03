import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import styles from './index.module.scss';
import { FC } from 'react';
import { AddInfoProps } from './types';
// For do something to table section
const AddInfo: FC<AddInfoProps> = (props) => {
  // Inits
  const { openDrawerHandler } = props;
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
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={() => openDrawerHandler()}
          >
            Add something
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default AddInfo;
