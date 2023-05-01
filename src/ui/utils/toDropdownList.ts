import { DropdownItem } from 'ui/shared/DropdownInput';

export const toDropdownList = (list: string[]): DropdownItem[] => {
  return list.map(value => ({ label: value, value: value }));
};
