import { Button, Modal } from 'antd';
import { FC } from 'react';
import { ConfirmDeleteProps } from './types';
import styles from './index.module.scss';
import { DeleteFilled } from '@ant-design/icons';
import { toastText } from 'utils/utils';

// ConfirmDelete popup
const ConfirmDelete: FC<ConfirmDeleteProps> = (props) => {
  // Inits
  const { handleCancel, handleOk, isModalOpen } = props;

  // for delete the selected value
  const deleteItemHandler = () => {
    toastText('User deleted successfully', 'success');
    handleCancel();
  };

  //   JSX
  return (
    <Modal
      title={
        <div className={styles['confirm-delete-model']}>
          <DeleteFilled className={styles['delete-icon']} />
          <h4 className={styles['confirm-delete-model__title']}>
            Are you sure want to delete
          </h4>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered={true}
      width={400}
      footer={[
        <Button
          key="ok"
          type="primary"
          danger={true}
          onClick={deleteItemHandler}
        >
          DELETE
        </Button>,
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
      ]}
    ></Modal>
  );
};

export default ConfirmDelete;
