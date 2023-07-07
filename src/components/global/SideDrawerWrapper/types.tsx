export type SideDrawerProps = {
  children?: any;
  isOpen: boolean;
  closeDrawerByAnimation: () => void;
  removeDrawerFromDom: () => void;
  headerTitle: string;
}
