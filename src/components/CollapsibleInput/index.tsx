import { useState } from 'react';
import Icons from '../Icons';

import styles from './Input.module.css';

type CollapsibleInputProps = {
  className?: string;
  placeholder: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
};

const CollapsibleInput = ({ className, placeholder, onChange, defaultValue }: CollapsibleInputProps) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState(defaultValue || '');

  const handleIconClick = () => {
    setFocused(!focused);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) onChange(value);
  }

  return (
    <div
      className={
        styles.input + (className ? ' ' + className : '') + (focused ? ' ' + styles.focused : '')
      }
    >
      <div className={styles.iconWrapper} onClick={handleIconClick}>
        <Icons.Search className={styles.icon} />
      </div>
      <input type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
};

export default CollapsibleInput;
