import { useState } from 'react';
import Icons from '../Icons';
import useComponentVisible from '../../hooks/useComponentVisible';

import styles from './Input.module.css';

type CollapsibleInputProps = {
  className?: string;
  placeholder: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
};

const CollapsibleInput = ({
  className,
  placeholder,
  onChange,
  defaultValue,
}: CollapsibleInputProps) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [value, setValue] = useState(defaultValue || '');

  const handleIconClick = () => {
    if (isComponentVisible) return;
    setIsComponentVisible(true);
    setValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) onChange(value);
  };

  return (
    <div
      className={
        styles.input +
        (className ? ' ' + className : '') +
        (isComponentVisible ? ' ' + styles.focused : '')
      }
      ref={ref}
    >
      <div className={styles.iconWrapper} onClick={handleIconClick}>
        <Icons.Search className={styles.icon} />
      </div>
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
};

export default CollapsibleInput;
