import classNames from 'classnames';
import styles from "./UiButton.module.css";
import "../index.css";
import React, { ButtonHTMLAttributes, MouseEvent } from 'react';

type UiButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  isParagraph?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  theme?: 'dark' | 'light';
};

export const UiButton = React.memo<UiButtonProps>(
  ({ className, variant = 'primary', children, isParagraph, onClick, theme = 'dark', ...props }) => {
  const classes = classNames(styles.button, className, {
    [styles.primary]: variant === 'primary',
    [styles.secondary]: variant === 'secondary',
    [styles.disabled]: props.disabled,
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark'
  });
  if (isParagraph != null) {
    return (
      <p className={classes} onClick={onClick}>
        {children}
      </p>
    );
  }
  return (
    <button {...props} className={classes} onClick={onClick}>
      {children}
    </button>
  );
});
