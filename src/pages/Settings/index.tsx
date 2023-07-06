import { Col, Row } from 'antd';
import { ConfirmDelete, SideDrawerWrapper } from 'components/global';
import { AddInfo, DynamicTable, SideDrawerBody } from 'components/settings';
import IntegrationCard from 'components/settings/IntegrationCard';
import {
  integrationsCards,
  preferencesData,
  userColumns,
  userDataSource,
} from 'constants/DATA';
import { SettingsLayout } from 'layout';
import { MenuInfo } from 'rc-menu/lib/interface';
import { ChangeEvent, FC, useState } from 'react';
import styles from './index.module.scss';
import PreferenceCard from 'components/settings/PreferenceCard';

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
  const [drawerInfo, setDrawerInfo] = useState({
    drawerTitle: 'Add user',
  });
  const [settingComponent, setSettingComponent] = useState('users');
  const [viewconnection, setViewConnection] = useState(false);

  // Sidebar item click handler
  const handleSidebar = (event: MenuInfo) => {
    console.log('Event: ', event);
    setSettingComponent(event?.key);
  };

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
    const searchedRecords = userDataSource.filter((singleRecord: any) =>
      valueRegex.test(singleRecord.name)
    );
    setFilterData(searchedRecords);
    setData(searchedRecords.slice(0, 10));
    setCurrentPage(1);
  };

  // For change the data and title between components
  const setDrawerInfoHandler = (drawerTitle: any) => {
    setDrawerInfo({ drawerTitle });
  };

  // If add functionality required for the component or not
  const getAdd = () => {
    if (
      settingComponent === 'users' ||
      settingComponent === 'organization' ||
      settingComponent === 'roles'
    ) {
      return true;
    } else {
      return false;
    }
  };

  // JSX
  return (
    <>
      <div className={styles.settings}>
        <SettingsLayout handleSidebar={handleSidebar}>
          <div className={styles.settings__body}>
            <div className={styles['settings__body--add-info']}>
              <AddInfo
                openDrawerHandler={openDrawerHandler}
                setDrawerInfoHandler={setDrawerInfoHandler}
                title={settingComponent}
                addInfo={getAdd()}
              />
            </div>
            {settingComponent === 'users' && (
              <div className={styles['settings__body--table']}>
                <DynamicTable
                  userDataSource={data}
                  userColumns={userColumns}
                  paginationChangeHandler={paginationChangeHandler}
                  currentPage={currentPage}
                  totalRecords={filteredData.length}
                  performSearchHandler={performSearchHandler}
                  searchValue={searchValue}
                  showModal={showModal}
                  openDrawerHandler={openDrawerHandler}
                  setDrawerInfoHandler={setDrawerInfoHandler}
                />
              </div>
            )}
            {settingComponent === 'integrations' && (
              <div className={styles.integrations__container}>
                <Row gutter={16}>
                  {integrationsCards?.map((card) => {
                    return (
                      <Col
                        className="gutter-row"
                        xl={6}
                        lg={6}
                        md={12}
                        sm={12}
                        xs={24}
                      >
                        <IntegrationCard
                          title={card?.title}
                          buttonText={card?.buttonText}
                          logo={card?.logo}
                          ghost={card?.ghost}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </div>
            )}
            {settingComponent === 'preference' && (
              <div className={styles.integrations__container}>
                {preferencesData?.map((preference) => (
                  <PreferenceCard preference={preference} />
                ))}
              </div>
            )}
          </div>
        </SettingsLayout>
      </div>
      {isSideDrawerOpen && (
        <SideDrawerWrapper
          isOpen={drawerAnimation}
          removeDrawerFromDom={removeDrawerFromDom}
          closeDrawerByAnimation={closeDrawerByAnimation}
          headerTitle={drawerInfo.drawerTitle}
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
