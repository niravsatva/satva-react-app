/* eslint-disable react-hooks/rules-of-hooks */
import { Table } from 'antd';
import { SearchAndFilter } from 'components/settings';
import { FC } from 'react';
import './index.scss';
import { DynamicTableProps } from './types';

const DynamicTable: FC<DynamicTableProps> = (props) => {
  // Inits
  const {
    currentPage,
    paginationChangeHandler,
    totalRecords,
    userColumns,
    userDataSource,
    performSearchHandler,
    searchValue,
  } = props;
  // JSX
  return (
    <div className={'dynamic-table'}>
      <SearchAndFilter
        performSearchHandler={performSearchHandler}
        searchValue={searchValue}
      />
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

export default DynamicTable;
