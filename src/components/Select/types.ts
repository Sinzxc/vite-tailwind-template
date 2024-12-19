import React from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface SelectOption {
    value: string | number;
    label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    // Основные пропсы
    label?: string;
    error?: string;
    hint?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outlined' | 'filled' | 'standard';
    placeholder?: string;
    register?: ReturnType<UseFormRegister<any>>;
    classNames?: string;

    // Стилизация
    fullWidth?: boolean;
    className?: string;
    selectClassName?: string;
    labelClassName?: string;

    // Состояния
    loading?: boolean;
    success?: boolean;
    floatingLabel?: boolean;
    focusColor?: string;
    ringOnFocus?: boolean;

    // Делаем options опциональным
    options?: (SelectOption | string | number)[];
} 