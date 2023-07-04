import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row, Space, InputNumber, Select } from 'antd';
import { FC } from 'react';
import styles from './index.module.scss';
import { SearchAndFilterProps } from './types';
// For search filter and paginate
const SearchAndFilter: FC<SearchAndFilterProps> = (props) => {
  // Init
  const { performSearchHandler, searchValue } = props;
  // JSX
  return (
    <div className={styles['search-filter']}>
      <div className={styles['search-filter__wrapper']}>
        <Row justify={'space-between'}>
          <Col>
            <InputNumber
              min={10}
              max={15}
              defaultValue={10}
              onChange={() => {}}
            />
          </Col>
          <Col>
            <Space>
              <Input
                placeholder="Search user"
                suffix={<SearchOutlined />}
                onChange={performSearchHandler}
                value={searchValue}
              />
              <Select
                defaultValue="filterOne"
                style={{ width: 200 }}
                onChange={() => {}}
                options={[
                  { label: 'Filter One', value: 'filterOne' },
                  { label: 'Filter Second', value: 'filterSecond' },
                  { label: 'Filter Third', value: 'filterThird' },
                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchAndFilter;
