/* eslint-disable react-hooks/rules-of-hooks */
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table } from 'antd';
import { SearchAndFilter } from 'components/settings';
import { FC } from 'react';
import './index.scss';
import { DynamicTableProps } from './types';

const DynamicTable: FC<DynamicTableProps> = (props) => {
  // Inits
  const { Column } = Table;
  const {
    currentPage,
    paginationChangeHandler,
    totalRecords,
    userDataSource,
    performSearchHandler,
    searchValue,
    showModal,
    openDrawerHandler,
    setDrawerInfoHandler,
  } = props;

  const editDataHandler = () => {
    openDrawerHandler();
    setDrawerInfoHandler('Edit User');
  };

  // JSX
  return (
    <div className={'dynamic-table'}>
      <SearchAndFilter
        performSearchHandler={performSearchHandler}
        searchValue={searchValue}
      />
      <Table
        dataSource={userDataSource}
        pagination={{
          total: totalRecords,
          current: currentPage,
          onChange: paginationChangeHandler,
          className: 'dynamic-table__pagination',
        }}
      >
        <Column
          title="Organization Name"
          dataIndex="name"
          key="name"
          sorter={(a: any, b: any) => a.name.length - b.name.length}
          sortDirections={['descend']}
        />
        <Column title="Email Address" dataIndex="email" key="email" />
        <Column title="Phone Number" dataIndex="phone" key="phone" />
        <Column title="Created On" dataIndex="created" key="created" />
        <Column
          title="Action"
          dataIndex="action"
          key="action"
          render={() => (
            <Space size={10}>
              <EditOutlined
                className="table-edit-icon"
                onClick={editDataHandler}
              />
              <DeleteOutlined
                className="table-delete-icon"
                onClick={showModal}
              />
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default DynamicTable;
