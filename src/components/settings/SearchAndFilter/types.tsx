import { ChangeEvent } from 'react';
export interface SearchAndFilterProps {
  performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}
