export interface DynamicTableProps {
  userColumns: any;
  userDataSource: any;
  paginationChangeHandler: (pageNo: number) => void;
  currentPage: number;
  totalRecords: number;
}
