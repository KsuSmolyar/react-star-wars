import classNames from 'classnames';
import styles from "./UiInput.module.css";
import "../index.css";
import React, { InputHTMLAttributes } from 'react';
import closeIcon from "./img/close.svg";
type UiInputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  classesProp?: string
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  handleInputChange?: (value: string ) => void;
}
export const UiInput = React.memo<UiInputProps>(
  ({classesProp, type, handleInputChange, value, placeholder, ...props }) => {
  const classes = classNames(styles.inputWrapper, classesProp);
    return (
      <div className={classNames(classes)}>
        <input
          type={type}
          onChange={(e) => handleInputChange?.(e.target.value)}
          value={value}
          placeholder={placeholder}
          className={styles.input}
          {...props} 
        />
        <img 
        className={classNames(styles.clear, !value && styles.clear__disabled)} 
        src={closeIcon} 
        alt="clear" 
        onClick={() => value && handleInputChange?.("")}
        />
      </div>
    );
});
