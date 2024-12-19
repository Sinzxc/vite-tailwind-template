import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    // Основные пропсы
    label?: string;
    error?: string;
    hint?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'filled' | 'standard';

    // Иконки
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    iconClassName?: string;

    // Стилизация
    fullWidth?: boolean;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;

    // Состояния
    loading?: boolean;
    success?: boolean;

    floatingLabel?: boolean;

    focusColor?: string;
    ringOnFocus?: boolean;
} 