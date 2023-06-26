import React from 'react';
import Icons from '../Icons';
import {
  Filter,
  FilterTypes,
  SCROLL_DIFF_MULTIPLIER,
  ScrollState,
  TypedFilter,
  isFilterSelected,
  setTypes,
} from './helper';

import styles from './FilterArray.module.css';

type FilterArrayProps = {
  filters: Array<Filter>;
  secondaryFilters?: { parent: string; filters: Array<Filter> };
  onChange?: (filter: Filter) => void;
  className?: string;
};

const FilterArray = ({ filters, secondaryFilters, onChange, className }: FilterArrayProps) => {
  const filtersRef = React.useRef<HTMLDivElement>(null);
  const [displayedFilters, setDisplayedFilters] = React.useState<Array<TypedFilter>>(
    setTypes(filters, 'primary')
  );
  const [selectedFilter, setSelectedFilter] = React.useState<Filter>();
  const [secondarySelected, setSecondarySelected] = React.useState<Filter>();
  const [scroll, setScroll] = React.useState<ScrollState>({
    maxScrollValue: 0,
    clickDiff: 0,
    showLeft: false,
    showRight: true,
  });

  const clearSelected = (type?: FilterTypes) => {
    if (!type) type = 'primary';
    let newDisplayedFilters: Array<TypedFilter> = [];

    if (type === 'primary') {
      newDisplayedFilters = setTypes(filters, type);
      setSelectedFilter(undefined);
      setSecondarySelected(undefined);
    } else if (type === 'secondary' && secondaryFilters) {
      if (selectedFilter) {
        newDisplayedFilters = [
          ...setTypes([selectedFilter], 'primary'),
          ...setTypes(secondaryFilters?.filters, type),
        ];
        setSecondarySelected(undefined);
      }
    }

    setDisplayedFilters(newDisplayedFilters);
  };

  const handleFilterClick = (typedFilter: TypedFilter) => {
    const { type, filter: clickedFilter } = typedFilter;

    if (type === 'primary') {
      if (selectedFilter?.value === clickedFilter.value) {
        clearSelected();
      } else {
        setSelectedFilter(clickedFilter);
        if (secondaryFilters && secondaryFilters.parent === clickedFilter.value) {
          setDisplayedFilters([
            { type, filter: clickedFilter },
            ...setTypes(secondaryFilters.filters, 'secondary'),
          ]);
        } else {
          setDisplayedFilters([{ type, filter: clickedFilter }]);
        }
      }
    } else if (type === 'secondary') {
      if (secondarySelected?.value === clickedFilter.value) {
        clearSelected(type);
      } else {
        setSecondarySelected(clickedFilter);
        if (selectedFilter) {
          setDisplayedFilters([
            { type: 'primary', filter: selectedFilter },
            { type, filter: clickedFilter },
          ]);
        }
      }
    }
  };

  const handleScrollClick = (scrollLeft: boolean) => {
    if (!filtersRef.current) return;
    const currentScrollValue = filtersRef.current.scrollLeft;
    let newScrollValue = currentScrollValue;

    if (scrollLeft) {
      newScrollValue -= scroll.clickDiff;
    } else {
      newScrollValue += scroll.clickDiff;
    }

    filtersRef.current.scrollTo({ left: newScrollValue, top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!filtersRef.current) return;
    const currentScrollValue = filtersRef.current.scrollLeft;

    if (currentScrollValue === 0) {
      setScroll((prev) => ({
        ...prev,
        showLeft: false,
        showRight: true,
      }));
    } else if (currentScrollValue === scroll.maxScrollValue) {
      setScroll((prev) => ({
        ...prev,
        showLeft: true,
        showRight: false,
      }));
    } else if (!scroll.showLeft || !scroll.showRight) {
      setScroll((prev) => ({
        ...prev,
        showLeft: true,
        showRight: true,
      }));
    }
  };

  const filterClassName = (typedFilter: TypedFilter) => {
    let className = styles.filter;

    if (typedFilter.type === 'secondary') {
      className += ' ' + styles.secondary;
    }
    if (isFilterSelected(typedFilter, selectedFilter, secondarySelected)) {
      className += ' ' + styles.selected;
    }

    return className;
  };

  React.useEffect(() => {
    if (!filtersRef.current) return;
    const maxScrollValue = filtersRef.current.scrollWidth - filtersRef.current.clientWidth;
    const scrollDiff = (maxScrollValue / displayedFilters.length) * SCROLL_DIFF_MULTIPLIER;
    let updatedScrollState = scroll;
    setScroll((prev) => {
      updatedScrollState = {
        ...prev,
        maxScrollValue,
        clickDiff: scrollDiff,
      };
      return updatedScrollState;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.filters + (className ? ' ' + className : '')}
        ref={filtersRef}
        onScroll={handleScroll}
      >
        {selectedFilter && (
          <div className={styles.filter + ' ' + styles.clear} onClick={() => clearSelected()}>
            <Icons.Cross className={styles.icon} />
          </div>
        )}
        {displayedFilters.map((item) => {
          const className = filterClassName(item);
          return (
            <div
              className={className}
              key={item.filter.value}
              onClick={() => handleFilterClick(item)}
            >
              <p>{item.filter.label}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.scroll}>
        <div className={styles.left + (!scroll.showLeft ? ' ' + styles.hide : '')}>
          <div className={styles.button} onClick={() => handleScrollClick(true)}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
        </div>
        <div className={styles.right + (!scroll.showRight ? ' ' + styles.hide : '')}>
          <div className={styles.button} onClick={() => handleScrollClick(false)}>
            <Icons.SimpleArrow className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterArray;
