import { useState } from 'react';
import Icons from '../Icons';
import styles from './Input.module.css';

type InputProps = {
  type: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  className?: string;
};

const Input = ({ type, placeholder, onChange, defaultValue, className }: InputProps) => {
  const [value, setValue] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    if (onChange) onChange(value);
  };

  const handleClearClick = () => {
    setValue('');
    if (onChange) onChange('');
  };

  return (
    <div
      className={
        styles.container +
        (isFocused ? ' ' + styles.focused : '') +
        (className ? ' ' + className : '')
      }
    >
      <Icons.Search className={styles.icon + ' ' + styles.search} />
      <input
        type={type}
        placeholder={placeholder || ''}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {value && (
        <Icons.Cross className={styles.icon + ' ' + styles.clear} onClick={handleClearClick} />
      )}
    </div>
  );
};

export default Input;
