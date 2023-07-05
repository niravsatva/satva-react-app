import { ChangeEvent } from 'react';

export interface DynamicTableProps {
  userColumns: any;
  userDataSource: any;
  paginationChangeHandler: (pageNo: number) => void;
  currentPage: number;
  totalRecords: number;
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  showModal: () => void;
  openDrawerHandler: () => void;
  setDrawerInfoHandler: (title: string) => void;
}
