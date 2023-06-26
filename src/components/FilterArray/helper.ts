export const SCROLL_DIFF_MULTIPLIER = 2;

export type Filter = {
  value: string;
  label: string;
};

export type FilterTypes = 'primary' | 'secondary';

export type TypedFilter = {
  type: 'primary' | 'secondary';
  filter: Filter;
};

export type ScrollState = {
  maxScrollValue: number;
  clickDiff: number;
  showLeft: boolean;
  showRight: boolean;
}

export const setTypes = (filters: Array<Filter>, type: FilterTypes): Array<TypedFilter> => {
  return filters.map((filter) => ({ type, filter }));
};

export const isFilterSelected = (
  filter: TypedFilter,
  primarySelected?: Filter,
  secondarySelected?: Filter
) => {
  let selected = false;
  if (filter.type === 'primary') {
    selected = filter.filter.value === primarySelected?.value;
  } else if (filter.type === 'secondary') {
    selected = filter.filter.value === secondarySelected?.value;
  }
  return selected;
};
