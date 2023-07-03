/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'antd';
import { FC } from 'react';
import { DynamicTableProps } from './types';
import './index.scss';

const index: FC<DynamicTableProps> = (props) => {
  // Inits
  const {
    currentPage,
    paginationChangeHandler,
    totalRecords,
    userColumns,
    userDataSource,
  } = props;
  // JSX
  return (
    <div className={'dynamic-table'}>
      <Table
        dataSource={userDataSource}
        columns={userColumns}
        pagination={{
          total: totalRecords,
          current: currentPage,
          onChange: paginationChangeHandler,
          className: 'dynamic-table__pagination',
        }}
      />
    </div>
  );
};

export default index;
