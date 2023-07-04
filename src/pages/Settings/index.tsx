import { SideDrawerWrapper } from 'components/global';
import { AddInfo, DynamicTable, SideDrawerBody } from 'components/settings';
import { userColumns, userDataSource } from 'constants/DATA';
import { SettingsLayout } from 'layout';
import { useState, ChangeEvent, FC } from 'react';
import styles from './index.module.scss';
import { ConfirmDelete } from 'components/global';

// settings page
const Settings: FC = () => {
  // This state is only because we not have api at current movement
  const [filteredData, setFilterData] = useState(userDataSource);
  // Inits
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(filteredData.slice(0, 10));
  const [drawerAnimation, setDrawerAnimation] = useState<boolean>(false);
  const [isSideDrawerOpen, setSideDrawerOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  //   For open the model
  const showModal = () => {
    setIsModalOpen(true);
  };

  //   For conform operation
  const handleOk = () => {
    setIsModalOpen(false);
  };

  //   For cancel operation
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Handle the pagination for the table
  const paginationChangeHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
    setData(filteredData.slice((pageNo - 1) * 10, pageNo * 10));
  };

  // For perform the close animation
  const closeDrawerByAnimation = () => {
    setDrawerAnimation(false);
  };

  // For remove from the dom
  const removeDrawerFromDom = () => {
    setSideDrawerOpen(false);
  };
  // For open the sideDrawer with animation
  const openDrawerHandler = () => {
    setDrawerAnimation(true);
    setSideDrawerOpen(true);
  };

  // For perform the search operation
  const performSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const valueRegex = new RegExp(value, 'ig');
    setSearchValue(value);
    const searchedRecords = userDataSource.filter((singleRecord) =>
      valueRegex.test(singleRecord.name)
    );
    setFilterData(searchedRecords);
    setData(searchedRecords.slice(0, 10));
    setCurrentPage(1);
  };

  // JSX
  return (
    <>
      <div className={styles.settings}>
        <SettingsLayout>
          <div className={styles.settings__body}>
            <div className={styles['settings__body--add-info']}>
              <AddInfo openDrawerHandler={openDrawerHandler} />
            </div>
            <div className={styles['settings__body--table']}>
              <DynamicTable
                userDataSource={data}
                userColumns={userColumns}
                paginationChangeHandler={paginationChangeHandler}
                currentPage={currentPage}
                totalRecords={filteredData.length}
                performSearchHandler={performSearchHandler}
                searchValue={searchValue}
              />
            </div>
          </div>
        </SettingsLayout>
      </div>
      {isSideDrawerOpen && (
        <SideDrawerWrapper
          isOpen={drawerAnimation}
          removeDrawerFromDom={removeDrawerFromDom}
          closeDrawerByAnimation={closeDrawerByAnimation}
          headerTitle="Add user"
        >
          <SideDrawerBody closeDrawerByAnimation={closeDrawerByAnimation} />
        </SideDrawerWrapper>
      )}
      <ConfirmDelete
        handleCancel={handleCancel}
        handleOk={handleOk}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default Settings;
