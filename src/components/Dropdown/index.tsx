import { useState } from 'react';
import Icons from '../Icons';
import useComponentVisible from '../../hooks/useComponentVisible';

import styles from './Dropdown.module.css';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: Array<DropdownOption>;
  defaultValue?: string;
  title?: string;
  onChange?: (value: DropdownOption) => void;
};

const Dropdown = ({ options, defaultValue, title, onChange }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0].value);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const onClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const onClickOption = (optionValue: string) => {
    setSelectedOption(optionValue);
    setIsComponentVisible(false);
    const option = options.find((option) => option.value === optionValue);
    if (onChange && option) onChange(option);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={onClick}>
        <p>{options.find((option) => option.value === selectedOption)?.label}</p>
        <Icons.DropdownArrow className={styles.icon} />
      </div>
      {isComponentVisible && (
        <div className={styles.options} ref={ref}>
          {title && (
            <div className={styles.header}>
              <p>{title}</p>
            </div>
          )}
          {options.map((option, index) => {
            const selected = option.value === selectedOption;
            return (
              <div
                className={styles.option + (selected ? ' ' + styles.selected : '')}
                key={index}
                onClick={() => onClickOption(option.value)}
              >
                <p>{option.label}</p>
                {selected && <Icons.Check className={styles.icon} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
