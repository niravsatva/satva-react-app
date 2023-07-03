/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'antd';
import { FC } from 'react';
import './index.scss';

interface TableProps {
  userColumns: any;
  userDataSource: any;
  paginationChangeHandler: any;
  currentPage: any;
  totalRecords: any;
}

const index: FC<TableProps> = (props) => {
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
