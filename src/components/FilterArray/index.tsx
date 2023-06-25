import React from 'react';
import styles from './FilterArray.module.css';
import Icons from '../Icons';

export type Filter = {
  value: string;
  label: string;
};

type FilterArrayProps = {
  filters: Array<Filter>;
  onFilterClick?: (filter: Filter) => void;
  className?: string;
};

const FilterArray = ({ filters, onFilterClick, className }: FilterArrayProps) => {
  const filtersRef = React.useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = React.useState({
    maxScrollValue: 0,
    clickDiff: 0,
    showLeft: false,
    showRight: true,
  });

  const handleFilterClick = (clickedFilter: Filter) => {
    if (onFilterClick) onFilterClick(clickedFilter);
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

  React.useEffect(() => {
    if (!filtersRef.current) return;
    const maxScrollValue = filtersRef.current.scrollWidth - filtersRef.current.clientWidth;
    const scrollDiff = maxScrollValue / filters.length * 2;
    setScroll((prev) => ({
      ...prev,
      maxScrollValue,
      clickDiff: scrollDiff,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.filters + (className ? ' ' + className : '')}
        ref={filtersRef}
        onScroll={handleScroll}
      >
        {filters.map((filter) => (
          <div className={styles.filter} key={filter.value} onClick={() => handleFilterClick(filter)}>
            <p>{filter.label}</p>
          </div>
        ))}
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
